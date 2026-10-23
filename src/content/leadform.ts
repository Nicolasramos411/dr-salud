export type SelectOption = { value: string; label: string };

export const leadForm = {
  fields: {
    name: { label: 'Nombre' },
    company: { label: 'Empresa' },
    email: { label: 'Correo de trabajo' },
    phone: { label: 'Teléfono' },
    employees: { label: 'Número de colaboradores', placeholder: 'Selecciona un rango' },
    services: { label: '¿Qué servicios te interesan? (opcional)' },
  },
  /** PENDING: example ranges. The client must confirm the real ones (docs/PENDIENTES.md). */
  employeeRanges: [
    { value: 'rango-1', label: '[Rango 1]' },
    { value: 'rango-2', label: '[Rango 2]' },
    { value: 'rango-3', label: '[Rango 3]' },
  ] satisfies SelectOption[],
  privacy: {
    before: 'He leído y acepto el',
    link: 'aviso de privacidad',
    after: '.',
  },
  validation: {
    nameRequired: 'Escribe tu nombre.',
    nameTooLong: 'El nombre es demasiado largo.',
    companyRequired: 'Escribe el nombre de tu empresa.',
    companyTooLong: 'El nombre de la empresa es demasiado largo.',
    emailInvalid: 'Escribe un correo válido, por ejemplo nombre@empresa.com.',
    phoneInvalid: 'Escribe un teléfono válido, con 10 dígitos.',
    employeesRequired: 'Selecciona un rango.',
    servicesTooLong: 'Usa 500 caracteres o menos.',
    privacyRequired: 'Debes aceptar el aviso de privacidad para continuar.',
  },
  submit: 'Solicitar propuesta',
  submitting: 'Enviando…',
  success: {
    title: '¡Gracias! Recibimos tu solicitud.',
    text: 'Te escribiremos pronto con una propuesta a la medida.',
  },
  errors: {
    generic: 'No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.',
    rateLimited: 'Enviaste varias solicitudes seguidas. Espera unos minutos e inténtalo otra vez.',
    unavailable: 'En este momento no podemos recibir solicitudes por el formulario.',
    whatsappAlternative: 'Escríbenos por WhatsApp',
    summary: 'Revisa los campos marcados.',
  },
} as const;
