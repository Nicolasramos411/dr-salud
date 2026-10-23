import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { routes } from './routes';

const widths = [320, 375, 768, 1024, 1440, 1920];

for (const route of routes) {
  test(`axe: ${route.path} has no serious or critical violations (desktop and mobile)`, async ({
    page,
  }) => {
    for (const viewport of [
      { width: 1440, height: 900 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(route.path);
      const { violations } = await new AxeBuilder({ page }).analyze();
      const blocking = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(
        blocking,
        JSON.stringify(
          blocking.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
          null,
          2,
        ),
      ).toEqual([]);
    }
  });

  test(`no horizontal overflow on ${route.path} from 320 to 1920 px`, async ({ page }) => {
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route.path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${route.path} at ${width}px`).toBeLessThanOrEqual(0);
    }
  });
}

test('interactive targets are at least 44 px on phones', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await page.goto(route.path);
    const small = await page.evaluate(() =>
      [
        ...document.querySelectorAll<HTMLElement>(
          'a[href], button, summary, select, input:not([type="hidden"]), textarea',
        ),
      ]
        .filter((el) => !el.closest('[aria-hidden="true"]') && el.offsetParent !== null)
        .filter((el) => {
          // Inline links inside running text are exempt (WCAG 2.5.8).
          const inText = el.tagName === 'A' && el.closest('p, li > span, label');
          // A checkbox is operated through its (44 px tall) label.
          const labelled = el.closest('label')?.getBoundingClientRect().height ?? 0;
          if (el.tagName === 'INPUT' && labelled >= 44) return false;
          const rect = el.getBoundingClientRect();
          return (
            !inText &&
            rect.width > 0 &&
            (rect.height < 44 || rect.width < 44) &&
            !(el.tagName === 'A' && rect.width >= 44 && rect.height >= 44)
          );
        })
        .map(
          (el) =>
            `${el.tagName} ${(el.textContent ?? '').trim().slice(0, 30)} ${Math.round(el.getBoundingClientRect().width)}x${Math.round(el.getBoundingClientRect().height)}`,
        ),
    );
    expect(small, route.path).toEqual([]);
  }
});

test('brand names are marked translate="no"', async ({ page }) => {
  await page.goto('/nosotros');
  expect(await page.locator('[translate="no"]').count()).toBeGreaterThan(3);
});

test('prefers-reduced-motion disables smooth scrolling', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
  await context.close();
});
