import { Brand } from '@/components/ui/Brand';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { ui } from '@/content/site';
import { whatsappFor } from '@/lib/whatsapp';
import { LeadForm } from './LeadForm';

/** Navy block with the pitch on the left and the lead form on the right. Anchor: #propuesta. */
export function ProposalSection({ title, text }: { title: string; text: string }) {
  return (
    <Section id="propuesta" tone="navy" labelledBy="propuesta-title">
      <div className="flex flex-wrap items-start gap-12 desk:gap-14">
        <div className="flex min-w-0 flex-[1_1_22rem] flex-col gap-4">
          <Heading id="propuesta-title" size="h2Compact" className="desk:text-[2.75rem]">
            <Brand>{title}</Brand>
          </Heading>
          <p className="m-0 text-[1.1875rem] text-on-navy">
            <Brand>{text}</Brand>
          </p>
          <ButtonLink
            href={whatsappFor('empresas')}
            variant="outlineLight"
            whatsapp
            className="mt-2 self-start"
          >
            {ui.whatsappPrefer}
          </ButtonLink>
        </div>
        <div className="min-w-0 flex-[1_1_26rem]">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
