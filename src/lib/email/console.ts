import type { LeadInput } from '@/lib/validation/lead';
import type { LeadNotifier } from './types';

/** Development fallback: prints the request instead of sending it. */
export const consoleNotifier: LeadNotifier = {
  async send(lead: LeadInput) {
    console.info(
      '[lead] Nueva solicitud de propuesta (modo desarrollo, no se envió correo):',
      lead,
    );
  },
};
