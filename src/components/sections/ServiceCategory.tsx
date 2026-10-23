import { Brand } from '@/components/ui/Brand';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import type { ServiceCategory as Category } from '@/content/servicios';

/** One service category: number + title on the left, rows with modality chips on the right. */
export function ServiceCategory({ category }: { category: Category }) {
  const titleId = `${category.id}-title`;
  return (
    <Section
      id={category.id}
      labelledBy={titleId}
      padding="py-10 desk:py-14"
      className="scroll-mt-4"
    >
      <div className="grid gap-8 desk:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] desk:gap-14">
        <div className="flex flex-col gap-2">
          <span
            aria-hidden="true"
            className="font-serif text-[2.25rem] leading-none font-bold text-turquoise"
          >
            {category.number}
          </span>
          <h2
            id={titleId}
            className="m-0 font-serif text-[1.75rem] leading-[1.2] font-bold text-balance"
          >
            <Brand>{category.title}</Brand>
          </h2>
          <p className="m-0 max-w-xs text-base text-gray">
            <Brand>{category.text}</Brand>
          </p>
        </div>
        <ul className="m-0 flex list-none flex-col p-0">
          {category.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-start gap-x-5 gap-y-3 border-b border-line py-5 first:pt-0"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky text-turquoise">
                <Icon name={item.icon} size={22} />
              </span>
              <div className="flex min-w-0 flex-[1_1_14rem] flex-col gap-1">
                <h3 className="m-0 text-lg font-bold">
                  <Brand>{item.title}</Brand>
                </h3>
                <p className="m-0 text-[0.9375rem] text-gray">
                  <Brand>{item.text}</Brand>
                </p>
              </div>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0 max-desk:pl-16 desk:max-w-44 desk:justify-end">
                {item.modalities.map((modality) => (
                  <li key={modality} className="rounded-full bg-sky px-3 py-1 text-xs font-bold">
                    {modality}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
