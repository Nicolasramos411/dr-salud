# Imágenes pendientes

Todas las fotos del sitio se declaran en [`src/content/images.ts`](../src/content/images.ts). Mientras `src` es `null`, el sitio muestra un recuadro punteado con la proporción correcta y la descripción de la foto.

## Cómo reemplazar una foto

1. Guarda el archivo en `public/images/` con el nombre de la tabla (JPG o WebP; Next.js genera AVIF/WebP y los tamaños responsivos).
2. En `src/content/images.ts`, cambia `src: null` por la ruta, por ejemplo `src: '/images/inicio-hero.jpg'`.
3. Revisa el `alt` de esa entrada. Debe describir lo que se ve en la foto real.

No hace falta tocar ningún componente. `next/image` usa `fill` dentro de un contenedor con la proporción indicada, así que una foto con otra proporción se recorta (`object-cover`) en lugar de deformarse. Entrega las fotos en la proporción indicada para controlar el encuadre.

Regla del manual: ninguna imagen debe sugerir instalaciones o equipos que Dr. Salud no tiene.

## Lista

La primera imagen visible de cada página (hero) se marca con `priority`; el resto se carga de forma diferida.

| Página            | Sección                                  | Archivo esperado                               | Proporción | Tamaño mínimo | Texto alternativo (provisional)                                         | Descripción                                                                                                                      |
| ----------------- | ---------------------------------------- | ---------------------------------------------- | ---------- | ------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Inicio            | Hero                                     | `public/images/inicio-hero.jpg`                | 4:3        | 1600 × 1200   | Médica de Dr. Salud atendiendo a un colaborador en una sala de juntas   | Médica de Dr. Salud atendiendo a un colaborador en una sala de juntas real. Luz natural, uniforme de la marca.                   |
| Inicio            | Cómo funciona, paso 1                    | `public/images/inicio-paso-1.jpg`              | 4:3        | 1200 × 900    | Toma de muestras a un colaborador en la oficina                         | Toma de muestras en la oficina.                                                                                                  |
| Inicio            | Cómo funciona, paso 2                    | `public/images/inicio-paso-2.jpg`              | 4:3        | 1200 × 900    | Médico revisando los resultados de un colaborador                       | Médico revisando resultados.                                                                                                     |
| Inicio            | Cómo funciona, paso 3                    | `public/images/inicio-paso-3.jpg`              | 4:3        | 1200 × 900    | Colaborador en videollamada con su médica                               | Colaborador en videollamada con su médica.                                                                                       |
| Inicio            | Cómo funciona, paso 4                    | `public/images/inicio-paso-4.jpg`              | 4:3        | 1200 × 900    | Llamada de seguimiento con un colaborador                               | Llamada de seguimiento.                                                                                                          |
| Empresas          | Hero                                     | `public/images/empresas-hero.jpg`              | 4:3        | 1600 × 1200   | Jornada de salud en una oficina de la Ciudad de México                  | Jornada de salud en una oficina de CDMX: colaboradores en toma de muestras con personal de Dr. Salud.                            |
| Personas          | Hero                                     | `public/images/personas-hero.jpg`              | 4:3        | 1600 × 1200   | Médico explicando resultados a un paciente en consultorio               | Médico explicando resultados a un paciente en consultorio, con calma y contacto visual.                                          |
| Personas          | Interpretación                           | `public/images/personas-interpretacion.jpg`    | 4:3        | 1400 × 1050   | Paciente revisando sus resultados impresos con su médica                | Paciente revisando sus resultados impresos con su médica, ambos sonriendo.                                                       |
| Cómo funciona     | La videollamada                          | `public/images/como-funciona-videollamada.jpg` | 4:3        | 1400 × 1050   | Colaborador en videollamada con su médica desde su escritorio           | Colaborador en videollamada con su médica desde su escritorio, con sus resultados a la mano.                                     |
| Nosotros          | Hero                                     | `public/images/nosotros-hero.jpg`              | 4:3        | 1600 × 1200   | Retrato grupal del equipo médico de Dr. Salud                           | Retrato grupal del equipo médico de Dr. Salud, con uniforme de la marca, en un espacio de trabajo real.                          |
| Nosotros          | Nuestra historia                         | `public/images/nosotros-historia.jpg`          | 4:3        | 1400 × 1050   | Fundadores y equipo en una de las primeras jornadas de salud en empresa | Fundadores o equipo en una de las primeras jornadas de salud en empresa.                                                         |
| Inicio y Nosotros | Panel del equipo (4 avatares circulares) | `public/team/equipo-1.jpg` … `equipo-4.jpg`    | 1:1        | 400 × 400     | (decorativos, alt vacío)                                                | Los cuatro avatares son genéricos y se reemplazarán por fotos del equipo. Se editan en `teamAvatars` de `src/content/images.ts`. |

## Ya incluida

| Dónde                                 | Archivo                                                  | Nota                                                    |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| Inicio y Nosotros, tarjeta del médico | `public/team/dr-luis-tiburcio-retrato.jpg` (720 × 720)   | Recorte cuadrado entregado por el cliente.              |
| Todo el sitio                         | `public/brand/logo-dr-salud.png` (1132 × 496)            | Raster; no hay maestro en vector (ver `PENDIENTES.md`). |
| Aliados                               | `public/partners/logo-eudaimonia.svg`, `logo-uniceq.svg` | Logos oficiales, sin modificar.                         |
