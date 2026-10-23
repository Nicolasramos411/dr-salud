import Link from 'next/link';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { NumberedCards } from '@/components/sections/NumberedCards';
import { ProgramBuilder } from '@/components/sections/ProgramBuilder';
import { ProposalSection } from '@/components/sections/ProposalSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Timeline } from '@/components/sections/Timeline';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import { empresas } from '@/content/empresas';
import { ui } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { whatsappFor } from '@/lib/whatsapp';

export const metadata = buildMetadata({ ...empresas.seo, path: '/empresas' });

export default function EmpresasPage() {
  const { hero } = empresas;
  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        text={hero.text}
        image={hero.image}
        bar
        actions={
          <>
            <ButtonLink href="#propuesta" size="lg">
              {ui.proposal}
            </ButtonLink>
            <ButtonLink href={whatsappFor('empresas')} variant="outline" size="lg" whatsapp>
              {ui.whatsappWrite}
            </ButtonLink>
          </>
        }
      />

      <Section padding="pb-12 desk:pb-[4.5rem]">
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {empresas.highlights.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2.5 rounded-full bg-sky px-5 py-3 text-base font-bold"
            >
              <Icon name="check" size={18} className="shrink-0 text-turquoise" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sky" labelledBy="diferencia-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock
            {...empresas.difference.intro}
            id="diferencia-title"
            bar
            className="max-w-[47.5rem]"
          />
          <NumberedCards items={empresas.difference.steps} tone="white" />
        </div>
      </Section>

      <Section id="servicios" labelledBy="servicios-title">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionIntroBlock {...empresas.services.intro} id="servicios-title" bar />
            <Link
              href={empresas.services.allLink.href}
              className="inline-flex min-h-11 items-center text-base font-semibold text-navy underline underline-offset-4 hover:text-gray"
            >
              {empresas.services.allLink.label}
            </Link>
          </div>
          <ServicesGrid items={empresas.services.items} />
        </div>
      </Section>

      <ProgramBuilder id="programa" {...empresas.program} bar />

      <Section tone="sky" id="contratacion" labelledBy="contratacion-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...empresas.hiring.intro} id="contratacion-title" bar />
          <Timeline steps={empresas.hiring.steps} />
        </div>
      </Section>

      <Faq content={empresas.faq} />
      <ProposalSection {...empresas.proposal} />
    </>
  );
}
