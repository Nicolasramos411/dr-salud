import { Section } from '@/components/ui/Section';
import { SectionIntroBlock } from '@/components/ui/SectionIntro';
import type { SectionIntro } from '@/content/types';
import { DoctorCard } from './DoctorCard';
import { TeamPanel } from './TeamPanel';

/** "Quién te atiende": doctor card + team panel. Shared by Inicio and Nosotros. */
export function TeamSection({
  id,
  intro,
  bar,
  bordered,
}: {
  id?: string;
  intro: SectionIntro;
  bar?: boolean;
  bordered?: boolean;
}) {
  return (
    <Section id={id} labelledBy={`${id ?? 'team'}-title`} bordered={bordered}>
      <div className="flex flex-col gap-10">
        <SectionIntroBlock {...intro} bar={bar} id={`${id ?? 'team'}-title`} />
        <div className="grid items-stretch gap-6 desk:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <DoctorCard />
          <TeamPanel />
        </div>
      </div>
    </Section>
  );
}
