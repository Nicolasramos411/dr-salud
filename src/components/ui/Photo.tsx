import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { SiteImage } from '@/content/types';
import { ImagePlaceholder } from './ImagePlaceholder';

type PhotoProps = {
  image: SiteImage;
  /** Only for the main image visible on load. */
  priority?: boolean;
  sizes?: string;
  compact?: boolean;
  className?: string;
  imageClassName?: string;
};

/** Renders the real photo when `image.src` exists, otherwise the placeholder with the same ratio. */
export function Photo({
  image,
  priority,
  sizes = '(min-width: 1200px) 560px, (min-width: 960px) 46vw, 100vw',
  compact,
  className,
  imageClassName,
}: PhotoProps) {
  if (!image.src) {
    return (
      <ImagePlaceholder
        ratio={image.ratio}
        description={compact ? (image.label ?? image.direction) : image.direction}
        compact={compact}
        className={className}
      />
    );
  }
  return (
    <div
      style={{ aspectRatio: image.ratio }}
      className={cn('relative w-full overflow-hidden rounded-panel bg-sky', className)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn('object-cover', imageClassName)}
      />
    </div>
  );
}
