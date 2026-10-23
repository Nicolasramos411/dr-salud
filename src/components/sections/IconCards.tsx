import { Brand } from '@/components/ui/Brand';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import type { IconItem } from '@/content/types';
import { cn } from '@/lib/cn';

type Props = {
  items: IconItem[];
  tone?: 'outline' | 'sky' | 'white';
  className?: string;
};

/** Bordered cards with icon, title and text (values, commitments, follow-up modes). */
export function IconCards({ items, tone = 'outline', className }: Props) {
  return (
    <ul
      className={cn(
        'm-0 grid list-none gap-5 p-0 sm:grid-cols-2',
        items.length >= 3 && 'desk:grid-cols-3',
        items.length === 4 && 'desk:grid-cols-4',
        className,
      )}
    >
      {items.map((item) => (
        <Card key={item.title} as="li" tone={tone}>
          <Icon name={item.icon} size={28} className="text-turquoise" />
          <h3 className="m-0 text-h3 font-bold">
            <Brand>{item.title}</Brand>
          </h3>
          <p className="m-0 text-base text-gray">
            <Brand>{item.text}</Brand>
          </p>
        </Card>
      ))}
    </ul>
  );
}
