import { ui } from '@/content/site';

export function SkipLink() {
  return (
    <a
      href="#contenido"
      className="fixed top-3 left-3 z-50 -translate-y-[200%] rounded-full bg-navy px-5 py-3 font-semibold text-white no-underline focus:translate-y-0"
    >
      {ui.skipLink}
    </a>
  );
}
