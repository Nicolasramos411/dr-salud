export type LegalBlock = { heading?: string; paragraphs: string[] };

/**
 * Aviso de privacidad. The legal text does not exist yet (blocking item in docs/PENDIENTES.md).
 * While `blocks` is empty the page shows a notice and is marked noindex.
 */
export const privacyNotice = {
  title: 'Aviso de privacidad',
  description: 'Aviso de privacidad de Dr. Salud.',
  emptyNotice:
    'Estamos preparando nuestro aviso de privacidad. Si tienes dudas sobre el tratamiento de tus datos, escríbenos por WhatsApp.',
  blocks: [] as LegalBlock[],
};

export const isPrivacyNoticeReady = privacyNotice.blocks.length > 0;
