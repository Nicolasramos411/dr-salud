# Dr. Salud — sitio web

Sitio de Dr. Salud, servicios médicos preventivos en Ciudad de México (prioridad B2B, también personas). Next.js 16 (App Router), TypeScript estricto, Tailwind CSS 4, todas las páginas estáticas (SSG); el único código de servidor es el envío del formulario «Solicitar propuesta».

## Requisitos

- Node 24 (ver `.nvmrc`; mínimo 22). Con nvm: `nvm use`.
- pnpm 12 (`corepack enable` o `npm i -g pnpm`).

## Instalación

```bash
pnpm install
cp .env.example .env.local   # opcional en desarrollo
pnpm dev                     # http://localhost:3000
```

## Scripts

| Script                              | Qué hace                                                                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm dev`                          | Servidor de desarrollo.                                                                                                                                                                                                        |
| `pnpm build` / `pnpm start`         | Build de producción y servidor.                                                                                                                                                                                                |
| `pnpm lint`                         | ESLint (config de Next + jsx-a11y), sin advertencias.                                                                                                                                                                          |
| `pnpm typecheck`                    | `tsc --noEmit`.                                                                                                                                                                                                                |
| `pnpm format` / `pnpm format:check` | Prettier.                                                                                                                                                                                                                      |
| `pnpm test`                         | Pruebas unitarias (Vitest): validación, WhatsApp, límite de envíos, SEO, contenido.                                                                                                                                            |
| `pnpm test:e2e`                     | Playwright: rutas, navegación, formulario, axe (sin violaciones serias o críticas), sin desbordamiento horizontal de 320 a 1920 px. Compila el sitio antes de probar. La primera vez: `pnpm exec playwright install chromium`. |
| `node scripts/capture.mjs [url]`    | Capturas de escritorio y móvil de cada ruta en `docs/capturas/`.                                                                                                                                                               |
| `node scripts/lighthouse.mjs [url]` | Lighthouse móvil de cada ruta; escribe `docs/LIGHTHOUSE.md`. Requiere Chrome.                                                                                                                                                  |

La integración continua (`.github/workflows/ci.yml`) corre lint, tipos, formato, pruebas unitarias, build y Playwright en cada push y pull request.

## Variables de entorno

Documentadas en [`.env.example`](./.env.example). Nada de esto va al cliente (no usan `NEXT_PUBLIC_`), salvo la URL del sitio.

| Variable               | Para qué                                               |
| ---------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, sitemap, Open Graph, JSON-LD). |
| `RESEND_API_KEY`       | Clave de Resend.                                       |
| `LEAD_TO_EMAIL`        | Correo que recibe las solicitudes.                     |
| `LEAD_FROM_EMAIL`      | Remitente (dominio verificado en Resend).              |

Sin las tres de correo: en desarrollo la solicitud se imprime en la consola del servidor; en producción el formulario muestra un error con la alternativa de WhatsApp. El envío está detrás de una interfaz (`src/lib/email/types.ts`): para cambiar de proveedor se escribe otra implementación y se elige en `src/lib/email/index.ts`, sin tocar el formulario.

## Estructura

```
src/
  app/            rutas, layout, sitemap, robots, imagen OG, favicon, Server Action del formulario
  components/
    ui/           piezas básicas (Button, Section, Heading, Icon, Photo…)
    layout/       Header, menú móvil, Footer, barra de acciones móvil, enlace «Saltar al contenido»
    sections/     secciones reutilizadas entre páginas (Hero, Faq, CtaBand, LeadForm, TeamSection…)
  content/        TODO el texto del sitio, tipado, un archivo por página
  lib/            whatsapp, seo, validación (Zod), correo, límite de envíos
  styles/         globals.css con los tokens de marca (@theme)
public/           brand/, partners/, team/, images/, icons/
docs/             PENDIENTES, IMAGENES, LIGHTHOUSE, NOTAS-DE-REVISION, capturas/
tests/            unit/ (Vitest), e2e/ (Playwright)
referencia/ marca/ assets/   material de origen (prototipo, manual, archivos entregados)
```

## Cómo editar textos

Los textos viven en `src/content/`, no en los componentes:

- `site.ts`: teléfono, WhatsApp, Instagram, LinkedIn, navegación, footer, enlaces legales y textos de interfaz.
- `inicio.ts`, `empresas.ts`, `personas.ts`, `servicios.ts`, `como-funciona.ts`, `nosotros.ts`: el contenido de cada página.
- `leadform.ts`: etiquetas, mensajes de error y rangos del formulario.
- `legal.ts`: aviso de privacidad.

Edita el archivo, guarda y listo; TypeScript avisa si falta algún campo. Los nombres «Dr. Salud», «Eudaimonía» y «UNICEQ» se marcan solos con `translate="no"`.

## Cómo reemplazar imágenes

Las fotos se declaran en `src/content/images.ts`. Mientras `src` es `null` se muestra un recuadro con la descripción. Para usar una foto: copia el archivo a `public/images/` y pon la ruta en `src`. La lista completa (archivo, proporción, tamaño, descripción) está en [`docs/IMAGENES.md`](./docs/IMAGENES.md).

## Marca

Colores y tipografías están definidos una sola vez en `src/styles/globals.css` (`@theme`): navy `#000468`, turquoise `#0290B4`, sky `#E1F5FC`, gray `#423B4D`. El turquesa no se usa para texto menor de 24 px. Titulares en Tinos 700, texto en Arimo. El logo de Dr. Salud se usa tal cual, sobre blanco y a 160 px o más.

## Desplegar en Vercel

1. Sube el repositorio a GitHub/GitLab/Bitbucket e impórtalo en Vercel (**Add New → Project**). Vercel detecta Next.js y pnpm; no cambies el comando de build ni el directorio de salida. Usa Node 24 en **Settings → General → Node.js Version**.
2. En **Settings → Environment Variables** (entorno _Production_, y _Preview_ si quieres probar el formulario) agrega `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL` y `NEXT_PUBLIC_SITE_URL` (con el dominio final). Después vuelve a desplegar: las variables se leen al desplegar.
3. En Resend, verifica el dominio de envío (registros SPF y DKIM) antes de pedir solicitudes reales.
4. En **Settings → Domains**, agrega el dominio y apunta el DNS como indica Vercel (A para el dominio raíz, CNAME para `www`). Elige cuál es el dominio principal; el otro redirige.
5. Revisa `docs/PENDIENTES.md`: no publiques mientras haya elementos que **BLOQUEA**.
6. Después del primer despliegue: prueba el formulario, comprueba `/sitemap.xml` y `/robots.txt`, y vuelve a medir con `node scripts/lighthouse.mjs https://tu-dominio`.

## Seguridad

Encabezados en `next.config.ts`: Content-Security-Policy (sin recursos externos: las fuentes se sirven desde el propio dominio), HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`. El formulario valida en cliente y servidor con el mismo esquema Zod, tiene un campo trampa (honeypot) y un límite básico de envíos, y nunca pide datos de salud.
