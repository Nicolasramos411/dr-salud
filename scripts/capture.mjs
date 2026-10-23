// Takes full-page desktop (1440 px) and mobile (390 px) screenshots of every route into docs/capturas.
// Usage: pnpm build && pnpm start (in another terminal), then: node scripts/capture.mjs [baseUrl]
import { chromium } from '@playwright/test';

const base = process.argv[2] ?? 'http://localhost:3000';
const routes = {
  inicio: '/',
  empresas: '/empresas',
  personas: '/personas',
  servicios: '/servicios',
  'como-funciona': '/como-funciona',
  nosotros: '/nosotros',
  'aviso-de-privacidad': '/aviso-de-privacidad',
};
const viewports = { escritorio: { width: 1440, height: 900 }, movil: { width: 390, height: 844 } };

const browser = await chromium.launch();
for (const [device, viewport] of Object.entries(viewports)) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile: device === 'movil',
  });
  const page = await context.newPage();
  for (const [name, path] of Object.entries(routes)) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `docs/capturas/${device}-${name}.png`, fullPage: true });
    console.log(`${device}-${name}`);
  }
  await context.close();
}
await browser.close();
