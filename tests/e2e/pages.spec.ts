import { expect, test } from '@playwright/test';
import { routes } from './routes';

for (const route of routes) {
  test(`${route.path} loads with its h1, title, canonical and a single main landmark`, async ({
    page,
  }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveText(route.h1);
    await expect(page).toHaveTitle(/Dr\. Salud/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(`${route.path === '/' ? '' : route.path}$`),
    );
    await expect(page.locator('html')).toHaveAttribute('lang', 'es-MX');
    await expect(page.locator('main')).toHaveCount(1);
  });
}

test('unknown routes show the 404 page', async ({ page }) => {
  const response = await page.goto('/no-existe');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('No encontramos esta página');
});

test('the privacy notice is noindex while it has no text; terms and cookies pages do not exist', async ({
  page,
  request,
}) => {
  await page.goto('/aviso-de-privacidad');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  expect((await request.get('/terminos-y-condiciones')).status()).toBe(404);
  expect((await request.get('/politica-de-cookies')).status()).toBe(404);
  await page.goto('/');
  await expect(
    page.getByRole('contentinfo').getByRole('link', { name: /Términos|cookies/i }),
  ).toHaveCount(0);
});

test('sitemap, robots and security headers', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const path of ['/empresas', '/personas', '/servicios', '/como-funciona', '/nosotros']) {
    expect(sitemap).toContain(path);
  }
  expect(sitemap).not.toContain('aviso-de-privacidad');
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain('Sitemap:');

  const headers = (await request.get('/')).headers();
  expect(headers['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(headers['x-content-type-options']).toBe('nosniff');
  expect(headers['referrer-policy']).toBeTruthy();
});

test('home exposes MedicalBusiness JSON-LD without address or hours', async ({ page }) => {
  await page.goto('/');
  const json = await page.locator('script[type="application/ld+json"]').first().textContent();
  const data = JSON.parse(json ?? '{}');
  expect(data['@type']).toBe('MedicalBusiness');
  expect(data.sameAs).toHaveLength(2);
  expect(data.address).toBeUndefined();
});
