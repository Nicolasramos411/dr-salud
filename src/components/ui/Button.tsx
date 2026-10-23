import Link from 'next/link';
import { cn } from '@/lib/cn';

const variants = {
  solid: 'bg-navy text-white hover:bg-navy-hover active:bg-navy-hover active:brightness-90',
  outline: 'border-[1.5px] border-navy text-navy hover:bg-sky active:bg-sky-hover',
  solidLight: 'bg-white text-navy hover:bg-sky active:bg-sky-hover',
  outlineLight: 'border-[1.5px] border-white text-white hover:bg-white/10 active:bg-white/20',
} as const;

const sizes = {
  md: 'min-h-12 px-[22px] text-base',
  lg: 'min-h-[3.25rem] px-7 text-[1.0625rem]',
} as const;

type Shared = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Shows the official WhatsApp glyph before the label. */
  whatsapp?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold no-underline transition-colors';

function classes({
  variant = 'solid',
  size = 'md',
  className,
}: Pick<Shared, 'variant' | 'size' | 'className'>) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = Shared & { href: string };

/** Link styled as a button. External links open in a new tab with rel="noopener". */
export function ButtonLink({ href, whatsapp, children, ...rest }: ButtonLinkProps) {
  const content = (
    <>
      {whatsapp && <span className="wa-icon" aria-hidden="true" />}
      {children}
    </>
  );
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes(rest)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes(rest)}>
      {content}
    </Link>
  );
}

type ButtonProps = Shared &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button({ variant, size, whatsapp, className, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(classes({ variant, size, className }), 'cursor-pointer disabled:opacity-60')}
    >
      {whatsapp && <span className="wa-icon" aria-hidden="true" />}
      {children}
    </button>
  );
}
