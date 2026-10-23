import Image from 'next/image';
import { partners } from '@/content/shared';
import { cn } from '@/lib/cn';

type Props = {
  partner: keyof typeof partners;
  className?: string;
  /** Official logos are never recolored; on sky backgrounds the white of the file is blended away. */
  blend?: boolean;
};

export function PartnerLogo({ partner, className, blend }: Props) {
  const logo = partners[partner];
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      translate="no"
      className={cn('block h-10 w-auto', blend && 'mix-blend-multiply', className)}
    />
  );
}
