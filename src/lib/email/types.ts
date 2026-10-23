import type { LeadInput } from '@/lib/validation/lead';

/** Anything that can deliver a lead to the team. Swap providers by implementing this. */
export interface LeadNotifier {
  send(lead: LeadInput): Promise<void>;
}

export class NotifierNotConfiguredError extends Error {
  constructor() {
    super('Lead email is not configured (RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL).');
    this.name = 'NotifierNotConfiguredError';
  }
}
