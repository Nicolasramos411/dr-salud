import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { ui } from '@/content/site';
import { whatsappFor } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: ui.notFound.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section padding="py-24">
      <div className="flex max-w-xl flex-col items-start gap-5">
        <Heading as="h1">{ui.notFound.title}</Heading>
        <p className="m-0 text-lead text-gray">{ui.notFound.text}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/">{ui.notFound.home}</ButtonLink>
          <ButtonLink href={whatsappFor('empresas')} variant="outline" whatsapp>
            {ui.whatsappWrite}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
