import { Brand } from '@/components/ui/Brand';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import type { FaqContent } from '@/content/types';

type Props = { content: FaqContent; id?: string };

/** FAQ with native <details>/<summary> and our own "+" marker. One component for every page. */
export function Faq({ content, id = 'preguntas' }: Props) {
  return (
    <Section id={id} size="prose" labelledBy={`${id}-title`} padding="py-12 desk:py-20">
      <div className="flex flex-col gap-6">
        <Heading id={`${id}-title`} size="h2Compact">
          {content.title}
        </Heading>
        <div className="flex flex-col">
          {content.items.map((item) => (
            <details key={item.question} className="border-b border-line">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-5 text-[1.1875rem] font-semibold">
                <span>
                  <Brand>{item.question}</Brand>
                </span>
                <svg
                  className="faq-plus size-5 shrink-0 text-turquoise transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="m-0 pb-5 text-[1.0625rem] text-gray">
                <Brand>{item.answer}</Brand>
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
