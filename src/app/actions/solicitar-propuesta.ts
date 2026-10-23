'use server';

import { headers } from 'next/headers';
import { leadForm } from '@/content/leadform';
import { getLeadNotifier, NotifierNotConfiguredError } from '@/lib/email';
import { isRateLimited } from '@/lib/rate-limit';
import { leadFromFormData, validateLead, type LeadFieldErrors } from '@/lib/validation/lead';

export type LeadFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | {
      status: 'error';
      message?: string;
      fieldErrors?: LeadFieldErrors;
      unavailable?: boolean;
      /** What the person typed, so the form can keep it after the server round trip. */
      values: ReturnType<typeof leadFromFormData>;
    };

export async function solicitarPropuesta(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  // Honeypot: real people never see this field. Pretend it worked so bots learn nothing.
  if (formData.get('website')) return { status: 'success' };

  const values = leadFromFormData(formData);
  const requestHeaders = await headers();
  const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) return { status: 'error', message: leadForm.errors.rateLimited, values };

  const result = validateLead(formData);
  if (!result.ok) return { status: 'error', fieldErrors: result.errors, values };

  try {
    await getLeadNotifier().send(result.data);
    return { status: 'success' };
  } catch (error) {
    if (error instanceof NotifierNotConfiguredError) {
      console.error(error.message);
      return { status: 'error', message: leadForm.errors.unavailable, unavailable: true, values };
    }
    console.error('Failed to send lead', error);
    return { status: 'error', message: leadForm.errors.generic, values };
  }
}
