import { CheckList } from '@/components/sections/CheckList';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { NumberedCards } from '@/components/sections/NumberedCards';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { SplitFeature } from '@/components/sections/SplitFeature';
import { Brand } from '@/components/ui/Brand';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import { personas } from '@/content/personas';
import { ui } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { whatsappFor } from '@/lib/whatsapp';

export const metadata = buildMetadata({ ...personas.seo, path: '/personas' });

export default function PersonasPage() {
  const { hero, partner, referral, interpretation } = personas;
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
            <ButtonLink href={whatsappFor('personas')} size="lg" whatsapp>
              {ui.whatsappWrite}
            </ButtonLink>
            <ButtonLink href="/servicios" variant="outline" size="lg">
              {ui.viewServices}
            </ButtonLink>
          </>
        }
      />

      <Section tone="sky" labelledBy="servicios-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...personas.services.intro} id="servicios-title" bar />
          <ServicesGrid items={personas.services.items} />
        </div>
      </Section>

      <Section labelledBy="recorrido-title">
        <div className="flex flex-col gap-10">
          <SectionIntroBlock {...personas.journey.intro} id="recorrido-title" bar />
          <NumberedCards items={personas.journey.steps} className="desk:grid-cols-4" />
        </div>
      </Section>

      <Section tone="sky" labelledBy="interpretacion-title">
        <SplitFeature image={interpretation.image}>
          <Eyebrow bar>{interpretation.eyebrow}</Eyebrow>
          <Heading id="interpretacion-title">{interpretation.title}</Heading>
          <CheckList items={interpretation.points} />
        </SplitFeature>
      </Section>

      <Section labelledBy="aliado-title">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <SectionIntroBlock
            eyebrow={partner.eyebrow}
            title={partner.title}
            text={partner.text}
            id="aliado-title"
            bar
          />
          <ul className="m-0 flex list-none flex-wrap gap-4 p-0">
            {partner.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-line px-5 py-4 text-base font-semibold"
              >
                <Icon name={item.icon} size={32} className="shrink-0 text-turquoise" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sky" labelledBy="referral-title" padding="py-14 desk:py-[4.5rem]">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex max-w-xl flex-col gap-2">
            <Heading id="referral-title" size="h2Compact">
              {referral.title}
            </Heading>
            <p className="m-0 text-body text-gray">
              <Brand>{referral.text}</Brand>
            </p>
          </div>
          <ButtonLink href={referral.cta.href}>{referral.cta.label}</ButtonLink>
        </div>
      </Section>

      <Faq content={personas.faq} />
      <CtaBand title={personas.closing.title} text={personas.closing.text} whatsapp="personas" />
    </>
  );
}
