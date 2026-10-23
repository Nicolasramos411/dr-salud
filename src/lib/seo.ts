import type { Metadata } from 'next';
import { site } from '@/content/site';

type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/empresas". */
  path: string;
  noindex?: boolean;
};

/** Title, description, canonical URL and Open Graph for one page. */
export function buildMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  const isHome = path === '/';
  const fullTitle = isHome ? `${site.name} — ${title}` : `${title} — ${site.name}`;
  return {
    title: isHome ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** MedicalBusiness structured data. No address or hours until the client confirms them. */
export function medicalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: site.name,
    url: site.url,
    telephone: site.phone.e164,
    areaServed: { '@type': 'AdministrativeArea', name: site.serviceArea },
    sameAs: [site.instagram.url, site.linkedin.url],
  };
}
