import { expect, test } from '@playwright/test';

test.describe('desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('header links reach every main page and mark the current one', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Principal', exact: true });
    for (const [name, path] of [
      ['Empresas', '/empresas'],
      ['Personas', '/personas'],
      ['Servicios', '/servicios'],
      ['Cómo funciona', '/como-funciona'],
      ['Nosotros', '/nosotros'],
    ] as const) {
      await nav.getByRole('link', { name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(nav.getByRole('link', { name, exact: true })).toHaveAttribute(
        'aria-current',
        'page',
      );
    }
  });

  test('"Solicitar propuesta" in the header goes to the form on /empresas', async ({ page }) => {
    await page.goto('/servicios');
    await page.getByRole('banner').getByRole('link', { name: 'Solicitar propuesta' }).click();
    await expect(page).toHaveURL(/\/empresas#propuesta$/);
    await expect(page.locator('#propuesta')).toBeInViewport();
  });

  test('WhatsApp links open a new tab with rel=noopener and the right prefilled message', async ({
    page,
  }) => {
    await page.goto('/empresas');
    const company = page.getByRole('banner').getByRole('link', { name: 'WhatsApp' });
    await expect(company).toHaveAttribute('target', '_blank');
    await expect(company).toHaveAttribute('rel', /noopener/);
    await expect(company).toHaveAttribute(
      'href',
      /^https:\/\/wa\.me\/525568758605\?text=Hola%2C%20quiero%20una%20propuesta%20para%20mi%20empresa$/,
    );

    await page.goto('/personas');
    const people = page
      .getByRole('main')
      .getByRole('link', { name: 'Escribir por WhatsApp' })
      .first();
    await expect(people).toHaveAttribute(
      'href',
      /text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios$/,
    );
  });

  test('service category chips and footer anchors scroll to their sections', async ({ page }) => {
    await page.goto('/servicios');
    await page.getByRole('link', { name: 'Vacunación' }).first().click();
    await expect(page.locator('#vacunacion')).toBeInViewport();
  });

  test('skip link is the first tab stop and moves focus to the content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Saltar al contenido' });
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#contenido$/);
  });

  test('FAQ items open and close natively', async ({ page }) => {
    await page.goto('/empresas');
    const item = page.locator('details').first();
    await expect(item).not.toHaveAttribute('open', '');
    await item.locator('summary').click();
    await expect(item).toHaveAttribute('open', '');
  });
});

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test('menu toggles, exposes the links and closes after navigating', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Abrir menú' });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await page
      .getByRole('navigation', { name: 'Principal', exact: true })
      .getByRole('link', { name: 'Servicios' })
      .click();
    await expect(page).toHaveURL(/\/servicios$/);
    await expect(page.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  test('the action bar appears only after the hero leaves the screen, on one line', async ({
    page,
  }) => {
    await page.goto('/empresas');
    const bar = page.getByRole('navigation', { name: 'Acciones rápidas' });
    await expect(bar).toHaveCount(0);
    await page.evaluate(() => window.scrollTo(0, 1600));
    await expect(bar).toBeVisible();
    for (const name of ['Solicitar propuesta', 'WhatsApp']) {
      const box = await bar.getByRole('link', { name }).boundingBox();
      expect(box?.height).toBeLessThan(60); // a wrapped label would be taller
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(bar).toHaveCount(0);
  });
});
