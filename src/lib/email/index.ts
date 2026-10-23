import { consoleNotifier } from './console';
import { createResendNotifier } from './resend';
import { NotifierNotConfiguredError, type LeadNotifier } from './types';

export { NotifierNotConfiguredError };
export type { LeadNotifier };

/** Resend when configured; console in development; an explicit error in production. */
export function getLeadNotifier(): LeadNotifier {
  const { RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL } = process.env;
  if (RESEND_API_KEY && LEAD_TO_EMAIL && LEAD_FROM_EMAIL) {
    return createResendNotifier({
      apiKey: RESEND_API_KEY,
      to: LEAD_TO_EMAIL,
      from: LEAD_FROM_EMAIL,
    });
  }
  if (process.env.NODE_ENV !== 'production') return consoleNotifier;
  throw new NotifierNotConfiguredError();
}
