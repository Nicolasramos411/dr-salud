import { Brand } from '@/components/ui/Brand';
import type { NumberedItem } from '@/content/types';

/** Numbered circles joined by a line: horizontal on desktop, vertical on phones. */
export function Timeline({ steps }: { steps: NumberedItem[] }) {
  return (
    <ol className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 desk:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-3">
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white">
              {index + 1}
            </span>
            <span className="hidden h-0.5 flex-1 bg-turquoise desk:block" />
          </div>
          <h3 className="m-0 text-h3 font-bold">
            <span className="sr-only">Paso {index + 1}: </span>
            <Brand>{step.title}</Brand>
          </h3>
          <p className="m-0 text-base text-gray">
            <Brand>{step.text}</Brand>
          </p>
        </li>
      ))}
    </ol>
  );
}
