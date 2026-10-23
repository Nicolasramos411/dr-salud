import { Photo } from '@/components/ui/Photo';
import type { SiteImage } from '@/content/types';

/** Photo on one side, content on the other. Stacks on phones. */
export function SplitFeature({
  image,
  children,
  imageFirst = true,
}: {
  image: SiteImage;
  children: React.ReactNode;
  imageFirst?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-10 desk:gap-14">
      <div className={`min-w-0 flex-[1_1_26rem] ${imageFirst ? '' : 'desk:order-2'}`}>
        <Photo image={image} />
      </div>
      <div className="flex min-w-0 flex-[1_1_26rem] flex-col gap-6">{children}</div>
    </div>
  );
}
