import { cn } from '@/lib/cn';

const widths = {
  site: 'max-w-site',
  narrow: 'max-w-narrow',
  prose: 'max-w-prose',
} as const;

type ContainerProps = {
  size?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
};

export function Container({ size = 'site', className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 desk:px-8', widths[size], className)}>{children}</div>
  );
}
