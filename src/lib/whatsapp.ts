import { site, whatsappMessages } from '@/content/site';

export type WhatsappAudience = keyof typeof whatsappMessages;

/** Builds a wa.me link, optionally with a prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** WhatsApp link with the prefilled message for companies or for individuals. */
export function whatsappFor(audience: WhatsappAudience): string {
  return whatsappUrl(whatsappMessages[audience]);
}
