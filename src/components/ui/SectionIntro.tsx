import type { SectionIntro as SectionIntroContent } from '@/content/types';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';
import { Heading } from './Heading';

type Props = SectionIntroContent & {
  id?: string;
  bar?: boolean;
  className?: string;
};

/** Eyebrow + h2 + optional lead paragraph, the opening of most sections. */
export function SectionIntroBlock({ eyebrow, title, text, id, bar, className }: Props) {
  return (
    <div className={cn('flex max-w-[45rem] flex-col gap-3', className)}>
      {eyebrow && <Eyebrow bar={bar}>{eyebrow}</Eyebrow>}
      <Heading id={id}>{title}</Heading>
      {text && <p className="m-0 text-body text-gray">{text}</p>}
    </div>
  );
}
