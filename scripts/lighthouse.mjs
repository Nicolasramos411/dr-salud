// Runs Lighthouse (mobile preset, the default) on every route and writes docs/LIGHTHOUSE.md.
// Usage: pnpm build && pnpm start (another terminal), then: node scripts/lighthouse.mjs [baseUrl]
// Needs Google Chrome; set CHROME_PATH if it is not found automatically.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const base = process.argv[2] ?? 'http://localhost:3000';
const routes = [
  '/',
  '/empresas',
  '/personas',
  '/servicios',
  '/como-funciona',
  '/nosotros',
  '/aviso-de-privacidad',
];
const out = mkdtempSync(join(tmpdir(), 'lh-'));
const rows = [];

for (const route of routes) {
  const file = join(out, `${route.replaceAll('/', '_') || '_home'}.json`);
  execFileSync(
    'pnpm',
    [
      'dlx',
      'lighthouse',
      base + route,
      '--quiet',
      '--output=json',
      `--output-path=${file}`,
      '--chrome-flags=--headless=new --no-sandbox',
    ],
    { stdio: 'ignore' },
  );
  const report = JSON.parse(readFileSync(file, 'utf8'));
  const score = (id) => Math.round(report.categories[id].score * 100);
  const audit = (id) => report.audits[id].displayValue;
  rows.push(
    `| \`${route}\` | ${score('performance')} | ${score('accessibility')} | ${score('best-practices')} | ${score('seo')} | ${audit('largest-contentful-paint')} | ${audit('cumulative-layout-shift')} | ${audit('total-blocking-time')} |`,
  );
  console.log(route, rows.at(-1));
}

const date = new Date().toISOString().slice(0, 10);
writeFileSync(
  'docs/LIGHTHOUSE.md',
  `# Lighthouse (móvil)

Medido el ${date} contra el build de producción local (\`pnpm build && pnpm start\`), con \`node scripts/lighthouse.mjs\`.

| Ruta | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | --: | --: | --: | --: | --: | --: | --: |
${rows.join('\n')}

Notas:

- \`/aviso-de-privacidad\` marca SEO por debajo de 95 a propósito: la página es \`noindex\` mientras no exista el texto legal (ver \`PENDIENTES.md\`). Con el texto publicado y el \`noindex\` retirado, el SEO es 100.
- Las mediciones locales no incluyen CDN ni HTTP/2 de Vercel; en producción el LCP suele mejorar. Repite la medición sobre la URL de Vercel antes de publicar.
`,
);
