import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';

type Block = { label: string; text: string };

export function MissionVision({ mission, vision }: { mission: Block; vision: Block }) {
  return (
    <Section id="vision" tone="sky" padding="py-14 desk:py-20">
      <div className="grid gap-10 desk:grid-cols-2 desk:gap-16">
        {[mission, vision].map((block) => (
          <div key={block.label} className="flex flex-col gap-4">
            <Eyebrow bar>{block.label}</Eyebrow>
            <p className="m-0 font-serif text-2xl leading-[1.3] font-bold text-balance desk:text-[1.75rem]">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
