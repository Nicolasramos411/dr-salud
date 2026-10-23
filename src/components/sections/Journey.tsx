import { Brand } from '@/components/ui/Brand';
import { Photo } from '@/components/ui/Photo';
import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import type { SectionIntro, SiteImage } from '@/content/types';

type Props = {
  id?: string;
  intro: SectionIntro;
  steps: { title: string; text: string; image: SiteImage }[];
};

/** Four steps, each with its photo (or placeholder) on a white card over a sky section. */
export function Journey({ id, intro, steps }: Props) {
  return (
    <Section tone="sky" id={id} labelledBy={`${id ?? 'journey'}-title`}>
      <div className="flex flex-col gap-12">
        <SectionIntroBlock {...intro} id={`${id ?? 'journey'}-title`} />
        <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 desk:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3.5 rounded-[1.25rem] bg-white p-4 pb-7"
            >
              <Photo
                image={step.image}
                compact
                sizes="(min-width: 960px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="!rounded-[0.875rem]"
              />
              <div className="flex flex-col gap-2 px-3">
                <p className="m-0 text-sm font-bold">PASO {index + 1}</p>
                <h3 className="m-0 text-[1.3125rem] font-bold">
                  <Brand>{step.title}</Brand>
                </h3>
                <p className="m-0 text-base text-gray">
                  <Brand>{step.text}</Brand>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
