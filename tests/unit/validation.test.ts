import { describe, expect, it } from 'vitest';
import { leadForm } from '@/content/leadform';
import { normalizePhone, validateLead } from '@/lib/validation/lead';

const valid = {
  name: 'Ana Pérez',
  company: 'Acme SA de CV',
  email: 'ana@acme.com',
  phone: '55 6875 8605',
  employees: leadForm.employeeRanges[0]!.value,
  services: '',
  privacy: 'on',
};

function form(overrides: Partial<Record<keyof typeof valid, string>> = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({ ...valid, ...overrides })) data.set(key, value);
  return data;
}

describe('validateLead', () => {
  it('accepts a complete request', () => {
    expect(validateLead(form()).ok).toBe(true);
  });

  it('accepts the optional services field empty or filled', () => {
    expect(validateLead(form({ services: '' })).ok).toBe(true);
    expect(validateLead(form({ services: 'Vacunación e interpretación' })).ok).toBe(true);
  });

  it('reports one error per invalid field', () => {
    const result = validateLead(
      form({ name: '', company: '', email: 'nope', phone: '123', employees: '', privacy: '' }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(Object.keys(result.errors).sort()).toEqual(
        ['company', 'email', 'employees', 'name', 'phone', 'privacy'].sort(),
      );
      expect(result.errors.privacy).toBe(leadForm.validation.privacyRequired);
    }
  });

  it('rejects an employees value that is not one of the ranges', () => {
    expect(validateLead(form({ employees: 'rango-inventado' })).ok).toBe(false);
  });

  it('rejects services longer than 500 characters', () => {
    expect(validateLead(form({ services: 'a'.repeat(501) })).ok).toBe(false);
  });

  it('trims whitespace in the parsed data', () => {
    const result = validateLead(form({ name: '  Ana Pérez  ' }));
    expect(result.ok && result.data.name).toBe('Ana Pérez');
  });
});

describe('normalizePhone', () => {
  it('keeps 10-digit numbers and strips formatting', () => {
    expect(normalizePhone('(55) 6875-8605')).toBe('5568758605');
  });

  it('drops the +52 country code', () => {
    expect(normalizePhone('+52 55 6875 8605')).toBe('5568758605');
  });
});
