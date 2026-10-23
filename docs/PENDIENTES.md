# Pendientes

Lo que falta del cliente. Los marcados **BLOQUEA** impiden publicar el sitio.

## Bloquea la publicación

- [ ] **BLOQUEA. Texto del aviso de privacidad.** Se escribe en `src/content/legal.ts` (`privacyNotice.blocks`). Mientras esté vacío, `/aviso-de-privacidad` muestra un aviso provisional, es `noindex` y no aparece en el sitemap; al agregar texto, todo eso se activa solo. El formulario exige aceptar este aviso.
- [ ] **BLOQUEA. Destino de las solicitudes del formulario.** Falta definir el correo receptor y crear la cuenta de Resend (con el dominio de envío verificado). Variables: `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`. Sin ellas, en producción el formulario muestra un error con la alternativa de WhatsApp.

## Contenido

- [ ] **Rangos de colaboradores del formulario.** Hoy hay tres opciones de ejemplo (`[Rango 1]`, `[Rango 2]`, `[Rango 3]`) en `src/content/leadform.ts` (`employeeRanges`). Deben sustituirse antes de publicar; se ven tal cual en el sitio.
- [ ] **Dirección del consultorio.** La pregunta frecuente «¿Dónde atienden?» de Personas dice solo «En nuestro consultorio en Ciudad de México.»: se omitió el texto «[Confirmar dirección.]» de la referencia. Cuando se confirme, agrégala en `src/content/personas.ts`. Con la dirección y los horarios confirmados, también se pueden sumar a los datos estructurados (`src/lib/seo.ts`).
- [ ] **Especialidad exacta del Dr. Luis Tiburcio.** Hoy dice «Médico cirujano general». Hay que confirmar si es título de Médico Cirujano (médico general) o especialidad en Cirugía General. Si es especialista, la ley pide mostrar también su certificado de especialidad.
- [ ] **Respaldo de «Atención 24 horas»** (footer, `src/content/site.ts`). El manual la marca como afirmación que requiere sustento. Se mantiene porque está en la referencia.
- [ ] **Fotos definitivas y fotos del equipo** para los avatares: lista en [`IMAGENES.md`](./IMAGENES.md).

## Marca y técnico

- [ ] **Archivo maestro del logo de Dr. Salud en vector.** El raster actual (1132 × 496) tiene unos 70 px de margen blanco propio; en el footer se compensa con un margen negativo.
- [ ] **Favicon aprobado.** Hay un favicon neutro (cuadrado azul marino) en `src/app/icon.tsx`.
- [ ] **Dominio definitivo.** Se usa `https://www.drsalud.mx` como valor provisional. Se cambia con `NEXT_PUBLIC_SITE_URL` en Vercel (afecta canonical, sitemap, Open Graph y JSON-LD).
- [ ] **Imagen para compartir (Open Graph).** Hay una generada con el logo sobre blanco y el lema; confirmar o reemplazar.

## Opcionales

- [ ] **Términos y condiciones** y **política de cookies.** No existen las páginas ni se muestran sus enlaces. Para activarlos: crear la página, y en `src/content/site.ts` poner `enabled: true` en su enlace del footer (`footer.legal.links`). Agrégalas también a `src/app/sitemap.ts`.
- [ ] Límite de envíos del formulario con almacenamiento compartido (Upstash/KV). El actual es en memoria y es de mejor esfuerzo en Vercel serverless; el cliente indicó que por ahora no es prioridad.
