import { Brand } from '@/components/ui/Brand';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { proposalHref, ui } from '@/content/site';
import { whatsappFor, type WhatsappAudience } from '@/lib/whatsapp';

type Props = {
  title?: string;
  text?: string;
  /** Show "Solicitar propuesta". */
  proposal?: boolean;
  /** Show the WhatsApp button, with the message for this audience. */
  whatsapp?: WhatsappAudience;
};

/** Closing call to action on navy. Centered, one component for every page. */
export function CtaBand({ title, text, proposal, whatsapp }: Props) {
  return (
    <Section tone="navy" labelledBy={title ? 'cta-title' : undefined} padding="py-16 desk:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {title && (
          <Heading id="cta-title" size="h2Compact">
            <Brand>{title}</Brand>
          </Heading>
        )}
        {text && (
          <p className="m-0 text-[1.1875rem] text-on-navy">
            <Brand>{text}</Brand>
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {proposal && (
            <ButtonLink href={proposalHref} variant="solidLight">
              {ui.proposal}
            </ButtonLink>
          )}
          {whatsapp && (
            <ButtonLink href={whatsappFor(whatsapp)} variant="outlineLight" whatsapp>
              {ui.whatsappWrite}
            </ButtonLink>
          )}
        </div>
      </div>
    </Section>
  );
}
