'use client';

import Link from 'next/link';
import { useActionState, useEffect, useId, useRef, useState } from 'react';
import { solicitarPropuesta, type LeadFormState } from '@/app/actions/solicitar-propuesta';
import { Button, ButtonLink } from '@/components/ui/Button';
import { leadForm } from '@/content/leadform';
import { whatsappFor } from '@/lib/whatsapp';
import { validateLead, type LeadField, type LeadFieldErrors } from '@/lib/validation/lead';
import { cn } from '@/lib/cn';

const idle: LeadFormState = { status: 'idle' };

const FIELD_ORDER: LeadField[] = [
  'name',
  'company',
  'email',
  'phone',
  'employees',
  'services',
  'privacy',
];

const inputClass =
  'min-h-12 w-full rounded-xl border-[1.5px] border-line-strong bg-white px-4 font-[inherit] text-base text-navy aria-[invalid=true]:border-error';

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: (props: {
    id: string;
    'aria-invalid': boolean;
    'aria-describedby'?: string;
  }) => React.ReactNode;
  className?: string;
};

function Field({ id, label, error, children, className }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={cn('flex min-w-0 flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-[0.9375rem] font-semibold">
        {label}
      </label>
      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="m-0 text-sm font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}

/** "Solicitar propuesta" form. Same Zod schema as the server; focus moves to the first error. */
export function LeadForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(solicitarPropuesta, idle);
  const [clientErrors, setClientErrors] = useState<LeadFieldErrors>({});
  const [lastState, setLastState] = useState(state);

  // A new server response replaces the browser-side errors (adjusting state during render, per React docs).
  if (state !== lastState) {
    setLastState(state);
    setClientErrors({});
  }

  const serverErrors = state.status === 'error' ? state.fieldErrors : undefined;
  const errors: LeadFieldErrors = { ...serverErrors, ...clientErrors };
  const values = state.status === 'error' ? state.values : undefined;

  const focusFirstError = (found: LeadFieldErrors) => {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  useEffect(() => {
    if (serverErrors) focusFirstError(serverErrors);
  }, [serverErrors]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const result = validateLead(new FormData(event.currentTarget));
    if (result.ok) {
      setClientErrors({});
      return;
    }
    event.preventDefault();
    setClientErrors(result.errors);
    focusFirstError(result.errors);
  };

  const id = (name: string) => `${uid}-${name}`;
  const text = leadForm.fields;
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="rounded-panel bg-white p-6 text-navy desk:p-9">
      <div aria-live="polite">
        {state.status === 'success' && (
          <div className="flex flex-col gap-2 py-6">
            <p className="m-0 font-serif text-2xl font-bold">{leadForm.success.title}</p>
            <p className="m-0 text-body text-gray">{leadForm.success.text}</p>
          </div>
        )}
      </div>
      {state.status !== 'success' && (
        <form
          ref={formRef}
          action={formAction}
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-[1.125rem]"
        >
          {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor={id('website')}>Sitio web</label>
            <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {hasErrors && <p className="sr-only">{leadForm.errors.summary}</p>}

          <div className="flex flex-wrap gap-4">
            <Field
              id={id('name')}
              label={text.name.label}
              error={errors.name}
              className="flex-[1_1_12rem]"
            >
              {(a11y) => (
                <input
                  {...a11y}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  defaultValue={values?.name}
                  className={inputClass}
                />
              )}
            </Field>
            <Field
              id={id('company')}
              label={text.company.label}
              error={errors.company}
              className="flex-[1_1_12rem]"
            >
              {(a11y) => (
                <input
                  {...a11y}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  defaultValue={values?.company}
                  className={inputClass}
                />
              )}
            </Field>
          </div>

          <div className="flex flex-wrap gap-4">
            <Field
              id={id('email')}
              label={text.email.label}
              error={errors.email}
              className="flex-[1_1_12rem]"
            >
              {(a11y) => (
                <input
                  {...a11y}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  defaultValue={values?.email}
                  className={inputClass}
                />
              )}
            </Field>
            <Field
              id={id('phone')}
              label={text.phone.label}
              error={errors.phone}
              className="flex-[1_1_12rem]"
            >
              {(a11y) => (
                <input
                  {...a11y}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  defaultValue={values?.phone}
                  className={inputClass}
                />
              )}
            </Field>
          </div>

          <Field id={id('employees')} label={text.employees.label} error={errors.employees}>
            {(a11y) => (
              <select
                {...a11y}
                name="employees"
                required
                defaultValue={values?.employees ?? ''}
                className={cn(inputClass, 'px-3')}
              >
                <option value="">{text.employees.placeholder}</option>
                {leadForm.employeeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <Field id={id('services')} label={text.services.label} error={errors.services}>
            {(a11y) => (
              <textarea
                {...a11y}
                name="services"
                rows={3}
                defaultValue={values?.services}
                className={cn(inputClass, 'py-3')}
              />
            )}
          </Field>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={id('privacy')}
              className="flex min-h-11 items-start gap-3 text-[0.9375rem]"
            >
              <input
                id={id('privacy')}
                name="privacy"
                type="checkbox"
                required
                defaultChecked={values?.privacy === 'on'}
                aria-invalid={Boolean(errors.privacy)}
                aria-describedby={errors.privacy ? id('privacy-error') : undefined}
                className="mt-0.5 size-6 shrink-0 accent-navy"
              />
              <span>
                {leadForm.privacy.before}{' '}
                <Link
                  href="/aviso-de-privacidad"
                  className="font-semibold underline underline-offset-2"
                >
                  {leadForm.privacy.link}
                </Link>
                {leadForm.privacy.after}
              </span>
            </label>
            {errors.privacy && (
              <p id={id('privacy-error')} className="m-0 text-sm font-semibold text-error">
                {errors.privacy}
              </p>
            )}
          </div>

          {state.status === 'error' && state.message && (
            <div
              role="alert"
              className="flex flex-col items-start gap-3 rounded-xl border border-error p-4 text-error"
            >
              <p className="m-0 font-semibold">{state.message}</p>
              {state.unavailable && (
                <ButtonLink href={whatsappFor('empresas')} whatsapp variant="outline">
                  {leadForm.errors.whatsappAlternative}
                </ButtonLink>
              )}
            </div>
          )}

          <Button type="submit" size="lg" disabled={pending} className="mt-1.5">
            {pending ? leadForm.submitting : leadForm.submit}
          </Button>
        </form>
      )}
    </div>
  );
}
