# Notas de revisión

Decisiones tomadas donde la referencia era ambigua o contradictoria, y mejoras sugeridas. No se cambió ningún texto aprobado.

## Decisiones (aprobadas en el plan)

- **Nombre de marca.** El manual y el logo dicen «Doctor Salud»; el encargo pide «Dr. Salud». El sitio usa «Dr. Salud» en textos, títulos y metadatos.
- **Un solo formulario.** La referencia tiene uno en Inicio (sin el campo opcional) y otro en Empresas. Se construyó un único `LeadForm` con los mismos campos, usado en ambas páginas con el ancla `#propuesta`. El destino de «Solicitar propuesta» es `/empresas#propuesta` en header, barra móvil y CTAs de Servicios, Cómo funciona y Nosotros; en Inicio apunta al formulario de Inicio.
- **Mensaje de WhatsApp.** Los botones de Personas (incluida la franja de Inicio «También te atendemos a ti») precargan «Hola, quiero información sobre sus servicios»; el resto, «Hola, quiero una propuesta para mi empresa».
- **Secciones vacías de la referencia** (una en Empresas y una en Servicios): se omitieron.
- **Enlaces del footer** que apuntaban a la misma página ahora tienen ancla propia (`/empresas#servicios`, `/empresas#programa`, `/servicios#vacunacion`…). «Preguntas frecuentes» va a `/como-funciona#preguntas`.
- **Footer legal.** Solo se muestra «Aviso de privacidad». Términos y cookies se retiraron por indicación del cliente; la configuración para activarlos está lista (ver `PENDIENTES.md`).
- **Logo de Eudaimonía.** Se mantiene sobre fondo celeste con `mix-blend-mode: multiply`, como en la referencia (decisión del cliente).
- **Dirección del consultorio.** Se omitió la frase «[Confirmar dirección.]».
- **Node 24** en `.nvmrc`, `engines.node >=22`.
- **Rate limit** en memoria; de mejor esfuerzo en Vercel.

## Detalles técnicos que conviene saber

- **TypeScript 5.9** en lugar de 7: Next 16 y typescript-eslint todavía esperan la API clásica de TypeScript.
- **Zod en modo `jitless`.** El compilador JIT de Zod usa `new Function()`, que una CSP estricta reporta como violación (Lighthouse lo penaliza). Con `jitless` la validación es igual y la CSP queda sin `unsafe-eval`.
- **CSP con `'unsafe-inline'` en scripts.** Las páginas son estáticas, así que no se puede usar un nonce por solicitud; Next inyecta scripts en línea para arrancar. Es la forma estándar para sitios estáticos. Si algún día se pasa a renderizado dinámico, se puede cambiar a nonces.
- **`pnpm test:e2e`** compila el sitio antes de probar (`pnpm build && pnpm start -p 3100`); en CI usa el build del paso anterior.
- El formulario en producción sin variables de entorno responde con el error «En este momento no podemos recibir solicitudes…» y un botón de WhatsApp; así lo verifica una prueba e2e.

## Mejoras que recomiendo (no aplicadas)

- Reemplazar los textos de relleno por los reales: rangos de colaboradores, dirección y aviso de privacidad.
- Pedir las fotos con la proporción exacta de `IMAGENES.md`; con ellas el LCP de los héroes pasará a medirse sobre una imagen real y conviene volver a pasar Lighthouse.
- Un logo en vector permitiría quitar el margen negativo del footer y servir un archivo más liviano.
- Agregar analítica respetuosa de privacidad y seguimiento de conversiones (clic en WhatsApp, envío del formulario) cuando el cliente lo pida; hoy no hay ninguna.
- Pasar el límite de envíos a Upstash/KV si aparece spam.
- Añadir una verificación de dominio SPF/DKIM en Resend antes de publicar para que las solicitudes no caigan en spam.
