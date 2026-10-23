import { cn } from '@/lib/cn';
import { Container } from './Container';

const tones = {
  white: 'bg-white',
  sky: 'bg-sky',
  navy: 'bg-navy text-white',
} as const;

type SectionProps = {
  tone?: keyof typeof tones;
  id?: string;
  /** id of the heading that names the section, for assistive tech. */
  labelledBy?: string;
  size?: 'site' | 'narrow' | 'prose';
  /** Vertical padding classes for the inner container. */
  padding?: string;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  tone = 'white',
  id,
  labelledBy,
  size = 'site',
  padding = 'py-16 desk:py-24',
  bordered,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], bordered && 'border-t border-line', className)}
    >
      <Container size={size} className={padding}>
        {children}
      </Container>
    </section>
  );
}
