import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import { Comparison } from '@/components/sections/Comparison';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Journey } from '@/components/sections/Journey';
import { PartnerBand } from '@/components/sections/PartnerBand';
import { PersonasBand } from '@/components/sections/PersonasBand';
import { ProgramBuilder } from '@/components/sections/ProgramBuilder';
import { ProposalSection } from '@/components/sections/ProposalSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { TeamSection } from '@/components/sections/TeamSection';
import { VisionCard } from '@/components/sections/VisionCard';
import { inicio } from '@/content/inicio';
import { buildMetadata } from '@/lib/seo';
import { whatsappFor } from '@/lib/whatsapp';
import Link from 'next/link';

export const metadata = buildMetadata({ ...inicio.seo, path: '/' });

export default function HomePage() {
  const { hero } = inicio;
  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        text={hero.text}
        image={hero.image}
        actions={
          <>
            <ButtonLink href="#propuesta" size="lg">
              {hero.primary}
            </ButtonLink>
            <ButtonLink href={whatsappFor('empresas')} variant="outline" size="lg" whatsapp>
              {hero.secondary}
            </ButtonLink>
          </>
        }
        after={
          <Link
            href={hero.personasLink.href}
            className="inline-flex min-h-11 items-center text-base font-medium text-navy hover:text-gray"
          >
            {hero.personasLink.label}
          </Link>
        }
      />

      <Section
        id="servicios"
        labelledBy="servicios-title"
        padding="pt-16 pb-8 desk:pt-24 desk:pb-12"
      >
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...inicio.services.intro} id="servicios-title" />
          <ServicesGrid items={inicio.services.items} />
          <PartnerBand {...inicio.services.partner} />
        </div>
      </Section>

      <ProgramBuilder id="programa" {...inicio.program} ctaHref="#propuesta" />
      <Journey id="como-funciona" intro={inicio.journey.intro} steps={inicio.journey.steps} />
      <Comparison content={inicio.comparison} />
      <TeamSection id="equipo" intro={inicio.team.intro} bordered />
      <PersonasBand {...inicio.personasBand} />
      <VisionCard content={inicio.vision} />
      <Faq content={inicio.faq} />
      <ProposalSection {...inicio.proposal} />
    </>
  );
}
