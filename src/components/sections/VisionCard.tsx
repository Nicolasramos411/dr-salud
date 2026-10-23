import { Brand } from '@/components/ui/Brand';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { inicio } from '@/content/inicio';

export function VisionCard({ content }: { content: typeof inicio.vision }) {
  return (
    <Section id="vision" labelledBy="vision-title" padding="pt-16 pb-8 desk:pt-24 desk:pb-12">
      <div className="flex flex-wrap items-center gap-8 rounded-panel border-[1.5px] border-line p-6 desk:p-12">
        <div className="flex min-w-0 flex-[1_1_26rem] flex-col gap-3">
          <p className="m-0 self-start rounded-full bg-sky px-3 py-1.5 text-[0.8125rem] font-bold tracking-[0.06em] uppercase">
            {content.badge}
          </p>
          <Heading id="vision-title" size="h2Compact" className="desk:text-[2.125rem]">
            {content.title}
          </Heading>
          <p className="m-0 text-body text-gray">
            <Brand>{content.text}</Brand>
          </p>
        </div>
        <ul className="m-0 flex min-w-0 flex-[1_1_20rem] list-none flex-wrap gap-3 p-0">
          {content.pillars.map((pillar) => (
            <li
              key={pillar}
              className="flex-[1_1_8.75rem] rounded-[0.875rem] border border-dashed border-line-strong p-5 text-center text-base font-semibold"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
