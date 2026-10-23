import { Brand } from '@/components/ui/Brand';
import type { NumberedItem } from '@/content/types';
import { cn } from '@/lib/cn';

type Props = {
  items: NumberedItem[];
  /** Grid classes. Default: responsive auto-fit-like columns. */
  className?: string;
  /** Card background. Use "white" on sky sections. */
  tone?: 'sky' | 'white';
};

/** Cards with a large turquoise serif number. */
export function NumberedCards({ items, className, tone = 'sky' }: Props) {
  return (
    <ol className={cn('m-0 grid list-none gap-5 p-0 sm:grid-cols-2 desk:grid-cols-3', className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            'flex flex-col gap-2.5 rounded-card p-7',
            tone === 'sky' ? 'bg-sky' : 'bg-white',
          )}
        >
          <span
            aria-hidden="true"
            className="font-serif text-stat leading-none font-bold text-turquoise"
          >
            {index + 1}
          </span>
          <h3 className="m-0 text-h3 font-bold">
            <Brand>{item.title}</Brand>
          </h3>
          <p className="m-0 text-base text-gray">
            <Brand>{item.text}</Brand>
          </p>
        </li>
      ))}
    </ol>
  );
}
