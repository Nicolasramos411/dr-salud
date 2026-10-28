import { Brand } from '@/components/ui/Brand';
import { Card } from '@/components/ui/Card';
import { nosotros } from '@/content/nosotros';
import { PartnerLogo } from './PartnerLogo';

/** Allies: secondary weight, each logo on its own, never merged. */
export function Allies({ items }: { items: typeof nosotros.allies.items }) {
  return (
    <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2">
      {items.map((item) => (
        <Card key={item.title} as="li" tone="sky" className="gap-4">
          <PartnerLogo partner={item.partner} blend className="h-10 self-start" />
          <p className="m-0 text-base text-gray">
            <Brand>{item.text}</Brand>
          </p>
        </Card>
      ))}
    </ul>
  );
}
