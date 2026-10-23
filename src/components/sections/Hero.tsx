import { Brand } from '@/components/ui/Brand';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Photo } from '@/components/ui/Photo';
import { Section } from '@/components/ui/Section';
import type { SiteImage } from '@/content/types';

type HeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  /** Turquoise rule under the eyebrow (inner pages). */
  bar?: boolean;
  actions?: React.ReactNode;
  after?: React.ReactNode;
  image?: SiteImage;
  children?: React.ReactNode;
};

/** Page opening. Marked with data-hero so the mobile action bar knows when it has scrolled away. */
export function Hero({ eyebrow, title, text, bar, actions, after, image, children }: HeroProps) {
  return (
    <div data-hero>
      <Section padding="py-12 desk:py-[5.5rem]">
        <div className="flex flex-wrap items-center gap-10 desk:gap-14">
          <div className="flex min-w-0 flex-[1_1_28rem] flex-col gap-6">
            <Eyebrow bar={bar}>{eyebrow}</Eyebrow>
            <Heading as="h1">
              <Brand>{title}</Brand>
            </Heading>
            <p className="m-0 max-w-[35rem] text-lead text-gray">
              <Brand>{text}</Brand>
            </p>
            {children}
            {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
            {after}
          </div>
          {image && (
            <div className="min-w-0 flex-[1_1_26rem]">
              <Photo image={image} priority />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
