import Image from 'next/image';
import { images } from '@/content/images';
import { doctor } from '@/content/shared';
import { Brand } from '@/components/ui/Brand';

/** Card of the physician. One component, used on Inicio and Nosotros. */
export function DoctorCard() {
  const photo = images.doctorTiburcio;
  return (
    <div className="grid grid-cols-[6.5rem_1fr] items-center gap-x-4 gap-y-1 rounded-[1.75rem] border border-line bg-sky-soft p-5 desk:grid-cols-[15rem_1fr] desk:gap-x-10 desk:p-7">
      {photo.src && (
        <div className="relative row-span-4 aspect-square overflow-hidden rounded-[1.25rem] bg-sky">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 960px) 240px, 104px"
            className="object-cover object-top"
          />
        </div>
      )}
      <p className="col-start-2 m-0 self-end font-serif text-xl font-bold desk:text-[1.625rem]">
        {doctor.name}
      </p>
      <p className="col-start-2 m-0 self-start text-base text-gray desk:text-lg">{doctor.role}</p>
      <p className="col-start-2 m-0 mt-2 self-start border-t border-line pt-3 text-sm text-gray">
        {doctor.license}
      </p>
      <p className="col-start-2 m-0 self-start text-sm text-gray">
        <Brand>{doctor.university}</Brand>
      </p>
    </div>
  );
}
