import { cn } from '@/lib/cn';
import type { ImageRatio } from '@/content/types';

type Props = {
  ratio: ImageRatio;
  /** Art direction text shown inside the box. */
  description: string;
  /** Compact variant for small slots (journey steps). */
  compact?: boolean;
  className?: string;
};

/** Stand-in for a photo that does not exist yet; mirrors the dashed box of the reference. */
export function ImagePlaceholder({ ratio, description, compact, className }: Props) {
  return (
    <div
      role="img"
      aria-label={`Foto pendiente: ${description}`}
      style={{ aspectRatio: ratio }}
      className={cn(
        'box-border flex w-full flex-col items-center justify-center gap-2 border-[1.5px] border-dashed border-line-strong text-center text-gray',
        compact ? 'rounded-[0.875rem] bg-white p-4 text-sm' : 'rounded-panel bg-sky p-7',
        className,
      )}
    >
      {!compact && <p className="m-0 text-sm font-bold tracking-[0.08em]">FOTO</p>}
      <p className={cn('m-0 max-w-sm', compact ? 'text-sm' : 'text-base')}>{description}</p>
    </div>
  );
}
