import { Brand } from '@/components/ui/Brand';
import { PartnerLogo } from './PartnerLogo';

/** Secondary "En colaboración con Eudaimonía" strip, lighter than the main brand. */
export function PartnerBand({ eyebrow, text }: { eyebrow: string; text: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5 rounded-card bg-sky px-8 py-7">
      <div className="flex flex-col gap-1">
        <p className="m-0 text-sm font-semibold tracking-[0.04em] uppercase">
          <Brand>{eyebrow}</Brand>
        </p>
        <p className="m-0 text-lg font-semibold">
          <Brand>{text}</Brand>
        </p>
      </div>
      <PartnerLogo partner="eudaimonia" blend />
    </div>
  );
}
