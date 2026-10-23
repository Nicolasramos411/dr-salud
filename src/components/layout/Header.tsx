import Link from 'next/link';
import { mainNav, proposalHref, site, ui } from '@/content/site';
import { whatsappFor } from '@/lib/whatsapp';
import { HeaderMenu } from './HeaderMenu';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="relative z-10 border-b border-line-header bg-white">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-5 py-3 desk:px-8 desk:py-4">
        <Link href="/" aria-label={`${site.name}, inicio`} className="block leading-none">
          <Logo width={176} className="max-desk:!w-40" />
        </Link>
        <HeaderMenu
          links={mainNav}
          whatsappHref={whatsappFor('empresas')}
          proposalHref={proposalHref}
          labels={{
            open: ui.openMenu,
            close: ui.closeMenu,
            whatsapp: ui.whatsapp,
            proposal: ui.proposal,
          }}
        />
      </div>
    </header>
  );
}
