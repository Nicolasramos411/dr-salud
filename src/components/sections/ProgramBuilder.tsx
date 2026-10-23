import { ButtonLink } from '@/components/ui/Button';
import { Brand } from '@/components/ui/Brand';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { proposalHref, ui } from '@/content/site';
import type { NumberedItem } from '@/content/types';
import { NumberedCards } from './NumberedCards';

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  steps: NumberedItem[];
  bar?: boolean;
  /** Where "Solicitar propuesta" points. Defaults to the shared proposal form. */
  ctaHref?: string;
};

/** "Cómo se arma un programa": intro on the left, three columns on desktop (never an orphan card). */
export function ProgramBuilder({
  id,
  eyebrow,
  title,
  text,
  steps,
  bar,
  ctaHref = proposalHref,
}: Props) {
  return (
    <Section id={id} labelledBy={`${id ?? 'programa'}-title`} padding="py-12 desk:py-24">
      <div className="grid gap-10 desk:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] desk:items-start desk:gap-12">
        <div className="flex flex-col items-start gap-4">
          <Eyebrow bar={bar}>{eyebrow}</Eyebrow>
          <Heading id={`${id ?? 'programa'}-title`}>{title}</Heading>
          <p className="m-0 text-body text-gray">
            <Brand>{text}</Brand>
          </p>
          <ButtonLink href={ctaHref} className="mt-2">
            {ui.proposal}
          </ButtonLink>
        </div>
        <NumberedCards items={steps} className="sm:grid-cols-3 desk:grid-cols-3" />
      </div>
    </Section>
  );
}
