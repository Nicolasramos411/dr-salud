import { expect, test } from '@playwright/test';

test('the form validates, focuses the first error and keeps what was typed', async ({ page }) => {
  await page.goto('/empresas');
  const form = page.locator('#propuesta form');
  await form.getByRole('button', { name: 'Solicitar propuesta' }).click();

  await expect(page.getByText('Escribe tu nombre.')).toBeVisible();
  await expect(page.getByText('Escribe el nombre de tu empresa.')).toBeVisible();
  await expect(page.getByText('Escribe un correo válido', { exact: false })).toBeVisible();
  await expect(page.getByText('Escribe un teléfono válido', { exact: false })).toBeVisible();
  await expect(page.getByText('Selecciona un rango.')).toBeVisible();
  await expect(
    page.getByText('Debes aceptar el aviso de privacidad para continuar.'),
  ).toBeVisible();
  await expect(form.getByLabel('Nombre')).toBeFocused();
  await expect(form.getByLabel('Nombre')).toHaveAttribute('aria-invalid', 'true');

  await form.getByLabel('Nombre').fill('Ana Pérez');
  await form.getByRole('button', { name: 'Solicitar propuesta' }).click();
  await expect(form.getByLabel('Empresa')).toBeFocused();
  await expect(form.getByLabel('Nombre')).toHaveValue('Ana Pérez');
});

test('inputs carry the right autocomplete, type and inputmode', async ({ page }) => {
  await page.goto('/empresas');
  const form = page.locator('#propuesta form');
  await expect(form.getByLabel('Nombre')).toHaveAttribute('autocomplete', 'name');
  await expect(form.getByLabel('Empresa')).toHaveAttribute('autocomplete', 'organization');
  const email = form.getByLabel('Correo de trabajo');
  await expect(email).toHaveAttribute('type', 'email');
  await expect(email).toHaveAttribute('inputmode', 'email');
  await expect(email).toHaveAttribute('autocomplete', 'email');
  await expect(email).toHaveAttribute('spellcheck', 'false');
  const phone = form.getByLabel('Teléfono');
  await expect(phone).toHaveAttribute('type', 'tel');
  await expect(phone).toHaveAttribute('autocomplete', 'tel');
  await expect(form.getByRole('link', { name: 'aviso de privacidad' })).toHaveAttribute(
    'href',
    '/aviso-de-privacidad',
  );
});

test('a valid request reaches the server; without email settings it offers WhatsApp', async ({
  page,
}) => {
  await page.goto('/empresas');
  const form = page.locator('#propuesta form');
  await form.getByLabel('Nombre').fill('Ana Pérez');
  await form.getByLabel('Empresa').fill('Acme');
  await form.getByLabel('Correo de trabajo').fill('ana@acme.com');
  await form.getByLabel('Teléfono').fill('55 6875 8605');
  await form.getByLabel('Número de colaboradores').selectOption({ index: 1 });
  await form.getByRole('checkbox').check();
  await form.getByRole('button', { name: 'Solicitar propuesta' }).click();

  const alert = form.getByRole('alert');
  await expect(alert).toContainText(
    'En este momento no podemos recibir solicitudes por el formulario.',
  );
  await expect(alert.getByRole('link', { name: 'Escríbenos por WhatsApp' })).toBeVisible();
  await expect(form.getByLabel('Nombre')).toHaveValue('Ana Pérez');
});

test('the honeypot field is invisible and a bot filling it gets a silent success', async ({
  page,
}) => {
  await page.goto('/empresas');
  const honeypot = page.locator('#propuesta input[name="website"]');
  await expect(honeypot).toHaveAttribute('tabindex', '-1');
  await expect(honeypot).not.toBeInViewport();
  await honeypot.evaluate((el: HTMLInputElement) => (el.value = 'https://spam.example'));
  const form = page.locator('#propuesta form');
  await form.getByLabel('Nombre').fill('Bot Bot');
  await form.getByLabel('Empresa').fill('Spam SA');
  await form.getByLabel('Correo de trabajo').fill('bot@spam.com');
  await form.getByLabel('Teléfono').fill('5555555555');
  await form.getByLabel('Número de colaboradores').selectOption({ index: 1 });
  await form.getByRole('checkbox').check();
  await form.getByRole('button', { name: 'Solicitar propuesta' }).click();
  await expect(page.getByText('¡Gracias! Recibimos tu solicitud.')).toBeVisible();
});
