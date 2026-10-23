import Image from 'next/image';
import { cn } from '@/lib/cn';

type LogoProps = {
  /** Display width in px. Never below 160 (brand manual). */
  width?: number;
  className?: string;
};

const RATIO = 496 / 1132;

/** Dr. Salud logo: used as is, on white, with no effects. */
export function Logo({ width = 176, className }: LogoProps) {
  const w = Math.max(width, 160);
  return (
    <Image
      src="/brand/logo-dr-salud.png"
      alt="Dr. Salud"
      width={w}
      height={Math.round(w * RATIO)}
      sizes={`${w}px`}
      loading="eager"
      className={cn('block h-auto', className)}
      style={{ width: w }}
    />
  );
}
