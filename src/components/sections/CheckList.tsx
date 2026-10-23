import { Brand } from '@/components/ui/Brand';
import { Icon } from '@/components/ui/Icon';

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body">
          <Icon name="check" size={22} className="mt-1 shrink-0 text-turquoise" />
          <span>
            <Brand>{item}</Brand>
          </span>
        </li>
      ))}
    </ul>
  );
}
