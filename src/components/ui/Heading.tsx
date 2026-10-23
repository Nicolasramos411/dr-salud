import { cn } from '@/lib/cn';

const sizes = {
  h1: 'text-h1-sm desk:text-h1 tracking-[-0.02em]',
  h2: 'text-h2-sm desk:text-h2 tracking-[-0.015em]',
  h2Compact: 'text-[2rem] leading-[1.15] desk:text-4xl desk:leading-[1.15]',
} as const;

type HeadingProps = {
  as?: 'h1' | 'h2';
  size?: keyof typeof sizes;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/** Serif display heading (Tinos 700). Balanced line breaks come from the global base styles. */
export function Heading({ as: Tag = 'h2', size, id, className, children }: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'm-0 font-serif font-bold',
        sizes[size ?? (Tag === 'h1' ? 'h1' : 'h2')],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
