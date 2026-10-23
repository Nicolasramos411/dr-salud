import { z } from 'zod';
import { leadForm } from '@/content/leadform';

// Zod's JIT compiles validators with new Function(), which a strict CSP (no 'unsafe-eval') reports as a violation.
z.config({ jitless: true });

const m = leadForm.validation;
const rangeValues: string[] = leadForm.employeeRanges.map((r) => r.value);

/** Mexican phones: 10 digits, optionally prefixed with +52 / 52. Spaces, dashes and parentheses allowed. */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  return digits.length === 12 && digits.startsWith('52') ? digits.slice(2) : digits;
}

/** One schema, shared by the browser (before sending) and the Server Action. */
export const leadSchema = z.object({
  name: z.string().trim().min(2, m.nameRequired).max(100, m.nameTooLong),
  company: z.string().trim().min(2, m.companyRequired).max(120, m.companyTooLong),
  email: z.string().trim().max(254, m.emailInvalid).pipe(z.email(m.emailInvalid)),
  phone: z
    .string()
    .trim()
    .refine((v) => normalizePhone(v).length === 10, m.phoneInvalid),
  employees: z.string().refine((v) => rangeValues.includes(v), m.employeesRequired),
  services: z.string().trim().max(500, m.servicesTooLong).optional(),
  privacy: z.literal('on', { error: m.privacyRequired }),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadField = keyof LeadInput;
export type LeadFieldErrors = Partial<Record<LeadField, string>>;

/** Reads the raw form values (FormData in the server, FormData built from the form in the browser). */
export function leadFromFormData(data: FormData) {
  const get = (key: string) => {
    const value = data.get(key);
    return typeof value === 'string' ? value : '';
  };
  return {
    name: get('name'),
    company: get('company'),
    email: get('email'),
    phone: get('phone'),
    employees: get('employees'),
    services: get('services'),
    privacy: get('privacy'),
  };
}

export function validateLead(data: FormData) {
  const result = leadSchema.safeParse(leadFromFormData(data));
  if (result.success) return { ok: true as const, data: result.data };
  const errors: LeadFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as LeadField | undefined;
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return { ok: false as const, errors };
}
