export type IconName =
  | 'plus-circle'
  | 'clipboard'
  | 'flask'
  | 'drop'
  | 'syringe'
  | 'video'
  | 'book'
  | 'pulse'
  | 'check'
  | 'clipboard-check'
  | 'lungs'
  | 'xray'
  | 'test-tube'
  | 'document'
  | 'leaf'
  | 'runner'
  | 'phone'
  | 'chat'
  | 'home'
  | 'users'
  | 'shield'
  | 'badge'
  | 'repeat'
  | 'sprout'
  | 'instagram'
  | 'linkedin'
  | 'person'
  | 'arrow-right';

export type Cta = {
  label: string;
  href: string;
};

export type ImageRatio = '4 / 3' | '1 / 1' | '3 / 2' | '16 / 9';

/** An image slot. While `src` is null the site shows a placeholder with `direction`. */
export type SiteImage = {
  /** Public path (e.g. "/images/inicio-hero.jpg") or null while the photo does not exist. */
  src: string | null;
  alt: string;
  ratio: ImageRatio;
  /** Art direction, shown inside the placeholder and listed in docs/IMAGENES.md. */
  direction: string;
  /** Short label used in compact placeholders. */
  label?: string;
};

export type Faq = { question: string; answer: string };

export type IconItem = { icon: IconName; title: string; text: string };
export type NumberedItem = { title: string; text: string };
export type FaqContent = { title: string; items: Faq[] };
export type CtaBandContent = { title: string; text?: string; primary?: Cta; secondary?: Cta };
export type SectionIntro = { eyebrow?: string; title: string; text?: string };
