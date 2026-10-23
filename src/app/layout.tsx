import type { Metadata, Viewport } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { SkipLink } from '@/components/layout/SkipLink';
import { inicio } from '@/content/inicio';
import { proposalHref, site, ui } from '@/content/site';
import { medicalBusinessJsonLd } from '@/lib/seo';
import { whatsappFor } from '@/lib/whatsapp';
import { arimo, tinos } from './fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${inicio.seo.title}`, template: `%s — ${site.name}` },
  description: inicio.seo.description,
  applicationName: site.name,
};

export const viewport: Viewport = {
  themeColor: '#000468',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${arimo.variable} ${tinos.variable}`}>
      <body>
        <SkipLink />
        <Header />
        <main id="contenido" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileActionBar
          proposalHref={proposalHref}
          whatsappHref={whatsappFor('empresas')}
          labels={{ proposal: ui.proposal, whatsapp: ui.whatsapp, region: ui.quickActions }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
