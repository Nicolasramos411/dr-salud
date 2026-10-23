import type { IconName } from '@/content/types';

const paths: Record<IconName, React.ReactNode> = {
  'plus-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  syringe: <path d="M17 3l4 4M19 5l-9 9M14 6l4 4M8 12l4 4M10 14l-6 6M3 21l1-1" />,
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </>
  ),
  book: <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM4 21V5M9 8h6" />,
  pulse: <path d="M3 12h4l3-7 4 14 3-7h4" />,
  check: <path d="M5 12l5 5 9-10" />,
  'clipboard-check': (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 13l2 2 4-4" />
    </>
  ),
  lungs: (
    <>
      <path d="M12 4v8M12 12c-2 0-3 2-3 2M12 12c2 0 3 2 3 2" />
      <path d="M8 7c-3 1-5 6-5 10 0 2 2 3 4 2l2-1V9c0-1-0.5-2-1-2zM16 7c3 1 5 6 5 10 0 2-2 3-4 2l-2-1V9c0-1 0.5-2 1-2z" />
    </>
  ),
  xray: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 6v12M8 9h8M8 12h8M8 15h8" />
    </>
  ),
  'test-tube': (
    <>
      <rect x="9" y="3" width="6" height="18" rx="2" />
      <path d="M11 8h2M11 12h2" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h7M9 16h7" />
    </>
  ),
  leaf: <path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15zM5 19l7-7" />,
  sprout: <path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15zM5 19l7-7" />,
  runner: (
    <>
      <circle cx="14" cy="4" r="2" />
      <path d="M9 21l3-6-3-3 2-4 4 3 3 1M12 15l3 2v4" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  home: <path d="M3 11l9-7 9 7M5 10v10h14V10" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5M10 9l1.5 1.5L14 8" />
    </>
  ),
  repeat: (
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2 2 0 0 1 4 0v3" />
    </>
  ),
  person: null,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

/** Single linear icon style (2px round stroke), colored with currentColor. */
export function Icon({ name, size = 28, className }: IconProps) {
  if (name === 'person') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <circle cx="12" cy="8.5" r="4" />
        <path d="M4 21c0-4.4 3.6-7.5 8-7.5s8 3.1 8 7.5z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
