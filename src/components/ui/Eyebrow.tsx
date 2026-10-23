import { cn } from '@/lib/cn';

type EyebrowProps = {
  children: React.ReactNode;
  /** Short turquoise rule below the label (inner pages). */
  bar?: boolean;
  className?: string;
};

export function Eyebrow({ children, bar, className }: EyebrowProps) {
  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <p className="m-0 text-eyebrow font-semibold tracking-[0.04em] text-navy uppercase">
        {children}
      </p>
      {bar && <div aria-hidden="true" className="h-[3px] w-12 bg-turquoise" />}
    </div>
  );
}
