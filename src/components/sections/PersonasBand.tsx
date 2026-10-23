import { Brand } from '@/components/ui/Brand';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { ui } from '@/content/site';
import { whatsappFor } from '@/lib/whatsapp';

type Props = { eyebrow: string; title: string; text: string };

/** "También te atendemos a ti": buttons are left-aligned on phones, right-aligned on desktop. */
export function PersonasBand({ eyebrow, title, text }: Props) {
  return (
    <Section tone="sky" labelledBy="personas-band-title" padding="py-14 desk:py-[4.5rem]">
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex min-w-0 flex-[1_1_26rem] flex-col gap-3.5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading id="personas-band-title" size="h2Compact" className="desk:text-4xl">
            {title}
          </Heading>
          <p className="m-0 text-body text-gray">
            <Brand>{text}</Brand>
          </p>
        </div>
        <div className="flex min-w-0 flex-[1_1_20rem] flex-wrap justify-start gap-3 desk:justify-end">
          <ButtonLink href="/servicios" variant="outline">
            {ui.viewServices}
          </ButtonLink>
          <ButtonLink href={whatsappFor('personas')} whatsapp>
            {ui.whatsappWrite}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
