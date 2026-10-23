import { Brand } from '@/components/ui/Brand';
import { Icon } from '@/components/ui/Icon';
import type { IconItem } from '@/content/types';

/**
 * Service list. On phones: compact rows (icon, title, one line). From 640 px: cards in a grid.
 */
export function ServicesGrid({
  items,
  columns = 'auto',
}: {
  items: IconItem[];
  columns?: 'auto' | 'four';
}) {
  return (
    <ul
      className={`m-0 grid list-none grid-cols-1 p-0 sm:gap-5 ${
        columns === 'four'
          ? 'sm:grid-cols-2 desk:grid-cols-4'
          : 'sm:grid-cols-2 desk:grid-cols-3 wide:grid-cols-4'
      }`}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-start gap-4 border-b border-line py-4 sm:flex-col sm:gap-3 sm:rounded-card sm:border sm:p-7"
        >
          <Icon name={item.icon} size={28} className="mt-0.5 shrink-0 text-turquoise" />
          <div className="flex flex-col gap-1 sm:gap-3">
            <h3 className="m-0 text-lg font-bold sm:text-h3">
              <Brand>{item.title}</Brand>
            </h3>
            <p className="m-0 text-base text-gray">
              <Brand>{item.text}</Brand>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
