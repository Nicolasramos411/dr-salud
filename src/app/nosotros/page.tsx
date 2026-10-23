import { Allies } from '@/components/sections/Allies';
import { CtaBand } from '@/components/sections/CtaBand';
import { Hero } from '@/components/sections/Hero';
import { IconCards } from '@/components/sections/IconCards';
import { MissionVision } from '@/components/sections/MissionVision';
import { Quote } from '@/components/sections/Quote';
import { SplitFeature } from '@/components/sections/SplitFeature';
import { TeamSection } from '@/components/sections/TeamSection';
import { Brand } from '@/components/ui/Brand';
import { ButtonLink } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import { nosotros } from '@/content/nosotros';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ ...nosotros.seo, path: '/nosotros' });

export default function NosotrosPage() {
  const { hero, story, quote } = nosotros;
  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        text={hero.text}
        image={hero.image}
        bar
        actions={
          <ButtonLink href={hero.cta.href} size="lg">
            {hero.cta.label}
          </ButtonLink>
        }
      />

      <Section labelledBy="historia-title" padding="py-12 desk:py-20">
        <SplitFeature image={story.image} imageFirst={false}>
          <SectionIntroBlock {...story.intro} id="historia-title" bar />
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 text-body text-gray">
              <Brand>{paragraph}</Brand>
            </p>
          ))}
        </SplitFeature>
      </Section>

      <MissionVision mission={nosotros.mission} vision={nosotros.vision} />
      <Quote {...quote} />

      <Section tone="sky" labelledBy="valores-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...nosotros.values.intro} id="valores-title" bar />
          <IconCards items={nosotros.values.items} tone="white" />
        </div>
      </Section>

      <TeamSection id="equipo" intro={nosotros.team.intro} bar />

      <Section tone="sky" labelledBy="aliados-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...nosotros.allies.intro} id="aliados-title" bar />
          <Allies items={nosotros.allies.items} />
        </div>
      </Section>

      <Section labelledBy="compromisos-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...nosotros.commitments.intro} id="compromisos-title" bar />
          <IconCards items={nosotros.commitments.items} />
        </div>
      </Section>

      <CtaBand proposal whatsapp="empresas" />
    </>
  );
}
