import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import { partners } from '@/content/shared';
import { footer, site } from '@/content/site';
import { whatsappFor } from '@/lib/whatsapp';
import { Logo } from './Logo';

const linkClass = 'text-navy underline-offset-4 hover:underline active:text-gray';

export function Footer() {
  const legalLinks = footer.legal.links.filter((link) => link.enabled);

  return (
    <footer className="border-t border-line bg-white pb-bar desk:pb-0">
      <div className="mx-auto flex max-w-site flex-col gap-12 px-5 py-14 desk:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              {/* The PNG has ~11 px of built-in white margin at 176 px; offset it so the mark lines up with the left edge. */}
              <Logo width={176} className="-ml-[11px]" />
              <p className="m-0 text-base font-semibold">{site.tagline}</p>
            </div>
            <nav aria-label="Secciones principales" className="flex flex-col items-start gap-2">
              {footer.sections.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-11 items-center font-serif text-2xl font-bold text-navy no-underline hover:text-gray"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex w-full max-w-md flex-col gap-4 rounded-panel border border-line bg-white p-7 desk:w-auto">
            <p className="m-0 text-eyebrow font-semibold tracking-[0.04em] uppercase">
              {footer.quote.eyebrow}
            </p>
            <div aria-hidden="true" className="h-[3px] w-12 bg-turquoise" />
            <p className="m-0 font-serif text-xl font-bold">{footer.quote.text}</p>
            <ButtonLink href={whatsappFor('empresas')} whatsapp className="self-start">
              {footer.quote.whatsapp}
            </ButtonLink>
            <div className="flex flex-col items-start gap-1 text-sm">
              <a
                href={`tel:${site.phone.e164}`}
                className={`${linkClass} inline-flex min-h-11 items-center font-semibold underline`}
              >
                {site.phone.display}
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener"
                className={`${linkClass} inline-flex min-h-11 items-center underline`}
              >
                {site.instagram.handle}
              </a>
              <span className="text-gray">{site.availability}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-line pt-10 desk:grid-cols-4">
          {footer.columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col items-start gap-1"
            >
              <p className="mb-2 text-xs font-bold tracking-[0.08em] uppercase">{column.title}</p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${linkClass} inline-flex min-h-11 items-center text-sm`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
          <nav aria-label={footer.legal.title} className="flex flex-col items-start gap-1">
            <p className="mb-2 text-xs font-bold tracking-[0.08em] uppercase">
              {footer.legal.title}
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${linkClass} inline-flex min-h-11 items-center text-sm`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="m-0 text-xs font-bold tracking-[0.08em] uppercase">
              {footer.partnersLabel}
            </p>
            {[partners.eudaimonia, partners.uniceq].map((partner) => (
              <Image
                key={partner.name}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-8 w-auto"
                translate="no"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener"
              aria-label={`Instagram ${site.instagram.handle}`}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy hover:bg-sky active:bg-sky-hover"
            >
              <Icon name="instagram" size={20} />
            </a>
            <a
              href={site.linkedin.url}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy hover:bg-sky active:bg-sky-hover"
            >
              <Icon name="linkedin" size={20} />
            </a>
          </div>
        </div>

        <p className="m-0 border-t border-line pt-6 text-xs text-gray">{site.copyright}</p>
      </div>
    </footer>
  );
}
