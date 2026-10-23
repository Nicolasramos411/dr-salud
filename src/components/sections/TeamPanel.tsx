import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { teamAvatars } from '@/content/images';
import { teamPanel } from '@/content/shared';

/** Panel "Un equipo completo…": avatars are generic until team photos exist. */
export function TeamPanel() {
  return (
    <div className="flex flex-col justify-center gap-3 rounded-[1.75rem] border border-line bg-sky p-7">
      <ul className="m-0 flex list-none items-center p-0">
        {teamAvatars.map((avatar, index) => (
          <li
            key={index}
            className="relative flex size-[3.25rem] items-center justify-center overflow-hidden rounded-full border-[3px] border-sky bg-sky-soft text-line-strong not-first:-ml-3.5"
          >
            {avatar.src ? (
              <Image src={avatar.src} alt={avatar.alt} fill sizes="52px" className="object-cover" />
            ) : (
              <Icon name="person" size={28} />
            )}
          </li>
        ))}
      </ul>
      <p className="m-0 font-serif text-[1.625rem] leading-[1.2] font-bold text-balance">
        {teamPanel.title}
      </p>
      <p className="m-0 text-base text-gray">{teamPanel.text}</p>
      <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0">
        {teamPanel.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
