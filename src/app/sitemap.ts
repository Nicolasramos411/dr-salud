import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { isPrivacyNoticeReady } from '@/content/legal';

const routes = ['/', '/empresas', '/personas', '/servicios', '/como-funciona', '/nosotros'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = isPrivacyNoticeReady ? [...routes, '/aviso-de-privacidad'] : routes;
  return paths.map((path) => ({ url: `${site.url}${path === '/' ? '' : path}` }));
}
