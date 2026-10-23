import { Brand } from '@/components/ui/Brand';
import { Icon } from '@/components/ui/Icon';

type Step = { title: string; text: string; points: string[] };

/** Vertical process: numbered marker, title, summary and a short checklist per step. */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-5 desk:gap-8">
          <div className="flex flex-col items-center" aria-hidden="true">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white">
              {index + 1}
            </span>
            {index < steps.length - 1 && <span className="my-1 w-0.5 flex-1 bg-turquoise" />}
          </div>
          <div className="flex flex-1 flex-col gap-4 pb-10 desk:flex-row desk:justify-between desk:gap-12">
            <div className="flex max-w-md flex-col gap-1">
              <h3 className="m-0 text-xl font-bold">
                <span className="sr-only">Paso {index + 1}: </span>
                <Brand>{step.title}</Brand>
              </h3>
              <p className="m-0 text-base text-gray">
                <Brand>{step.text}</Brand>
              </p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 desk:w-[22rem]">
              {step.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-base">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-turquoise" />
                  <span>
                    <Brand>{point}</Brand>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
