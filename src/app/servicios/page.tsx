import { CtaBand } from '@/components/sections/CtaBand';
import { Hero } from '@/components/sections/Hero';
import { ServiceCategory } from '@/components/sections/ServiceCategory';
import { servicios } from '@/content/servicios';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ ...servicios.seo, path: '/servicios' });

export default function ServiciosPage() {
  const { hero } = servicios;
  return (
    <>
      <Hero eyebrow={hero.eyebrow} title={hero.title} text={hero.text} bar>
        <nav aria-label={hero.navLabel} className="flex flex-wrap gap-2.5">
          {servicios.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-navy px-4 text-sm font-semibold text-navy no-underline hover:bg-sky active:bg-sky-hover"
            >
              {category.navLabel}
            </a>
          ))}
        </nav>
      </Hero>
      {servicios.categories.map((category) => (
        <ServiceCategory key={category.id} category={category} />
      ))}
      <CtaBand
        title={servicios.closing.title}
        text={servicios.closing.text}
        proposal
        whatsapp="empresas"
      />
    </>
  );
}
