'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import type { Cta } from '@/content/types';

type HeaderMenuProps = {
  links: Cta[];
  whatsappHref: string;
  proposalHref: string;
  labels: { open: string; close: string; whatsapp: string; proposal: string };
};

/** Navigation + header actions. Collapses into a toggle menu below 960 px. */
export function HeaderMenu({ links, whatsappHref, proposalHref, labels }: HeaderMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);

  // Close the menu after navigating (state adjusted during render, per React docs).
  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-line-header bg-white text-navy hover:bg-sky desk:hidden"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id="site-nav"
        className={cn(
          'w-full flex-col gap-5 pt-2 pb-4 desk:flex desk:w-auto desk:flex-row desk:items-center desk:gap-7 desk:py-0',
          open ? 'flex' : 'hidden',
        )}
      >
        <nav
          aria-label="Principal"
          className="flex flex-col gap-1 text-lg font-semibold desk:flex-row desk:gap-7 desk:text-base"
        >
          {links.map((link) => {
            const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'flex min-h-11 items-center border-b border-line-header text-navy no-underline hover:text-gray',
                  'desk:min-h-0 desk:border-b-[3px] desk:border-transparent desk:py-1.5',
                  current &&
                    'pl-3 shadow-[inset_4px_0_0_var(--color-turquoise)] desk:border-b-turquoise desk:pl-0 desk:shadow-none',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden gap-3 desk:flex">
          <ButtonLink href={whatsappHref} variant="outline" whatsapp className="min-h-11">
            {labels.whatsapp}
          </ButtonLink>
          <ButtonLink href={proposalHref} className="min-h-11">
            {labels.proposal}
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
