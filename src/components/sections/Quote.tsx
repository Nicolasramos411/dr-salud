import { Section } from '@/components/ui/Section';

type Props = { label: string; text: string; author: string; note: string };

export function Quote({ label, text, author, note }: Props) {
  return (
    <Section size="prose" padding="py-16 desk:py-24">
      <div aria-label={label} role="group" className="flex flex-col gap-6">
        <span
          aria-hidden="true"
          className="font-serif text-7xl leading-none font-bold text-turquoise"
        >
          “
        </span>
        <figure className="m-0 flex flex-col gap-3">
          <blockquote className="m-0 font-serif text-[1.75rem] leading-[1.25] font-bold text-balance desk:text-[2.25rem]">
            {text}
          </blockquote>
          <figcaption className="text-base font-semibold text-gray">{author}</figcaption>
        </figure>
        <p className="m-0 text-body text-gray">{note}</p>
      </div>
    </Section>
  );
}
