import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { IconCards } from '@/components/sections/IconCards';
import { NumberedCards } from '@/components/sections/NumberedCards';
import { SplitFeature } from '@/components/sections/SplitFeature';
import { StepList } from '@/components/sections/StepList';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import { comoFunciona } from '@/content/como-funciona';
import { followUp } from '@/content/shared';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ ...comoFunciona.seo, path: '/como-funciona' });

export default function ComoFuncionaPage() {
  const { hero, videocall } = comoFunciona;
  return (
    <>
      <Hero eyebrow={hero.eyebrow} title={hero.title} text={hero.text} bar>
        <nav aria-label={hero.navLabel} className="flex flex-wrap gap-2.5">
          {hero.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-navy px-4 text-sm font-semibold text-navy no-underline hover:bg-sky active:bg-sky-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Hero>

      <Section id="empresas" labelledBy="empresas-title" padding="py-12 desk:py-20">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...comoFunciona.empresas.intro} id="empresas-title" bar />
          <StepList steps={comoFunciona.empresas.steps} />
        </div>
      </Section>

      <Section tone="sky" labelledBy="videollamada-title">
        <SplitFeature image={videocall.image}>
          <Eyebrow bar>{videocall.eyebrow}</Eyebrow>
          <Heading id="videollamada-title">{videocall.title}</Heading>
          <IconCards
            items={videocall.items}
            tone="white"
            className="sm:grid-cols-1 desk:grid-cols-1"
          />
        </SplitFeature>
      </Section>

      <Section id="personas" labelledBy="personas-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...comoFunciona.personas.intro} id="personas-title" bar />
          <NumberedCards items={comoFunciona.personas.steps} className="desk:grid-cols-4" />
        </div>
      </Section>

      <Section tone="sky" labelledBy="seguimiento-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...comoFunciona.followUp.intro} id="seguimiento-title" bar />
          <IconCards items={followUp} tone="white" />
        </div>
      </Section>

      <Faq content={comoFunciona.faq} />
      <CtaBand
        title={comoFunciona.closing.title}
        text={comoFunciona.closing.text}
        proposal
        whatsapp="empresas"
      />
    </>
  );
}
