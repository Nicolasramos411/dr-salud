'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';

type Props = {
  proposalHref: string;
  whatsappHref: string;
  labels: { proposal: string; whatsapp: string; region: string };
};

/** Quick actions on phones. Appears only once the page hero (`[data-hero]`) has scrolled off screen. */
export function MobileActionBar({ proposalHref, whatsappHref, labels }: Props) {
  const pathname = usePathname();
  // Path on which the hero is out of view; a stale value from another page never shows the bar.
  const [visiblePath, setVisiblePath] = useState<string | null>(null);
  const visible = visiblePath === pathname;

  useEffect(() => {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setVisiblePath(!entry.isIntersecting && entry.boundingClientRect.top < 0 ? pathname : null);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  if (!visible) return null;

  return (
    <nav
      aria-label={labels.region}
      className="fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-line-header bg-white px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_16px_rgb(0_4_104/0.08)] desk:hidden"
    >
      <ButtonLink
        href={proposalHref}
        className="min-h-12 min-w-0 flex-[1.2_1_0] px-3 text-[0.9375rem] whitespace-nowrap max-[359px]:text-sm"
      >
        {labels.proposal}
      </ButtonLink>
      <ButtonLink
        href={whatsappHref}
        variant="outline"
        whatsapp
        className="min-h-12 min-w-0 flex-1 px-3 text-[0.9375rem] whitespace-nowrap max-[359px]:text-sm"
      >
        {labels.whatsapp}
      </ButtonLink>
    </nav>
  );
}
