# Lighthouse (móvil)

Medido el 2026-10-23 contra el build de producción local (`pnpm build && pnpm start`), con `node scripts/lighthouse.mjs`.

| Ruta                   | Rendimiento | Accesibilidad | Buenas prácticas | SEO |   LCP | CLS |   TBT |
| ---------------------- | ----------: | ------------: | ---------------: | --: | ----: | --: | ----: |
| `/`                    |          97 |           100 |              100 | 100 | 2.6 s |   0 | 10 ms |
| `/empresas`            |          97 |           100 |              100 | 100 | 2.6 s |   0 |  0 ms |
| `/personas`            |          99 |           100 |              100 | 100 | 2.2 s |   0 |  0 ms |
| `/servicios`           |          98 |           100 |              100 | 100 | 2.3 s |   0 |  0 ms |
| `/como-funciona`       |          98 |           100 |              100 | 100 | 2.3 s |   0 | 10 ms |
| `/nosotros`            |          98 |           100 |              100 | 100 | 2.3 s |   0 |  0 ms |
| `/aviso-de-privacidad` |          98 |           100 |              100 |  69 | 2.4 s |   0 |  0 ms |

Notas:

- `/aviso-de-privacidad` marca SEO por debajo de 95 a propósito: la página es `noindex` mientras no exista el texto legal (ver `PENDIENTES.md`). Con el texto publicado y el `noindex` retirado, el SEO es 100.
- Las mediciones locales no incluyen CDN ni HTTP/2 de Vercel; en producción el LCP suele mejorar. Repite la medición sobre la URL de Vercel antes de publicar.
