# Imágenes pendientes

Todas las fotos del sitio se declaran en [`src/content/images.ts`](../src/content/images.ts). Mientras `src` es `null`, el sitio muestra un recuadro punteado con la proporción correcta y la descripción de la foto.

## Cómo reemplazar una foto

1. Guarda el archivo en `public/images/` con el nombre de la tabla (JPG o WebP; Next.js genera AVIF/WebP y los tamaños responsivos).
2. En `src/content/images.ts`, cambia `src: null` por la ruta, por ejemplo `src: '/images/inicio-hero.jpg'`.
3. Revisa el `alt` de esa entrada. Debe describir lo que se ve en la foto real.

No hace falta tocar ningún componente. `next/image` usa `fill` dentro de un contenedor con la proporción indicada, así que una foto con otra proporción se recorta (`object-cover`) en lugar de deformarse. Entrega las fotos en la proporción indicada para controlar el encuadre.

Regla del manual: ninguna imagen debe sugerir instalaciones o equipos que Dr. Salud no tiene.

## Origen de las imágenes actuales

Las 9 fotos y los 4 avatares incluidos hoy son **imágenes ilustrativas generadas con IA** (Grok Imagine 2.0 vía Higgsfield). No son el equipo real de Dr. Salud: no llevan nombres ni credenciales y no deben presentarse como personal de la empresa. Se reemplazarán por fotos reales del equipo cuando existan (reemplazo: ver arriba; los avatares se editan en `teamAvatars`).

Los originales (dos variantes `-a` / `-b` por foto) están en `assets/fotos/` y nunca se modifican. `public/` recibe versiones optimizadas con:

```bash
pnpm exec tsx scripts/optimize-images.ts
```

El script redimensiona (fotos 4:3 a 2000 × 1500, avatares 1:1 a 800 × 800), comprime a JPEG progresivo con mozjpeg (calidad 85 y 88), convierte a sRGB y quita metadatos. Todas usan la variante `a`, salvo `inicio-paso-2`, que usa la `b` porque la `a` trae bordes blancos alrededor de la imagen. Para cambiar de variante, edita `variant` en esa línea del script y vuelve a ejecutarlo. Next.js sirve AVIF o WebP según el navegador y en el ancho que necesita cada contenedor.

## Pendientes

Las dos fotos de Nosotros están cubiertas por ahora con imágenes ilustrativas reutilizadas (las variantes `-b` sin usar de la jornada de Empresas y de la toma de muestras de Inicio). Deben sustituirse por fotos **reales** del equipo y de los fundadores; el archivo y la ruta son los mismos, solo hay que reemplazarlos y ajustar el `alt`.

| Página   | Sección          | Archivo esperado                      | Proporción | Tamaño mínimo | Texto alternativo (provisional)                                         | Descripción                                                                                             |
| -------- | ---------------- | ------------------------------------- | ---------- | ------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Nosotros | Hero             | `public/images/nosotros-hero.jpg`     | 4:3        | 1600 × 1200   | Retrato grupal del equipo médico de Dr. Salud                           | Retrato grupal del equipo médico de Dr. Salud, con uniforme de la marca, en un espacio de trabajo real. |
| Nosotros | Nuestra historia | `public/images/nosotros-historia.jpg` | 4:3        | 1400 × 1050   | Fundadores y equipo en una de las primeras jornadas de salud en empresa | Fundadores o equipo en una de las primeras jornadas de salud en empresa.                                |

## Ya incluida

| Dónde                                                       | Archivo                                                  | Nota                                                                               |
| ----------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Inicio, hero                                                | `public/images/inicio-hero.jpg`                          | IA, ilustrativa.                                                                   |
| Inicio, pasos 1 a 4                                         | `public/images/inicio-paso-1.jpg` … `inicio-paso-4.jpg`  | IA, ilustrativas.                                                                  |
| Empresas, hero                                              | `public/images/empresas-hero.jpg`                        | IA, ilustrativa.                                                                   |
| Personas, hero                                              | `public/images/personas-hero.jpg`                        | IA, ilustrativa.                                                                   |
| Personas, interpretación                                    | `public/images/personas-interpretacion.jpg`              | IA, ilustrativa.                                                                   |
| Cómo funciona, videollamada                                 | `public/images/como-funciona-videollamada.jpg`           | IA, ilustrativa.                                                                   |
| Inicio y Nosotros, panel del equipo (4 avatares circulares) | `public/team/equipo-1.jpg` … `equipo-4.jpg`              | IA, ilustrativos; decorativos (alt vacío). Reemplazar por fotos reales del equipo. |
| Inicio y Nosotros, tarjeta del médico                       | `public/team/dr-luis-tiburcio-retrato.jpg` (720 × 720)   | Recorte cuadrado entregado por el cliente.                                         |
| Todo el sitio                                               | `public/brand/logo-dr-salud.png` (1132 × 496)            | Raster; no hay maestro en vector (ver `PENDIENTES.md`).                            |
| Aliados                                                     | `public/partners/logo-eudaimonia.svg`, `logo-uniceq.svg` | Logos oficiales, sin modificar.                                                    |
