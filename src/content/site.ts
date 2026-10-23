import type { Cta } from './types';

export const site = {
  name: 'Dr. Salud',
  tagline: 'Salud que trabaja contigo.',
  slogan: 'Salud que trabaja contigo',
  /** Replace with the final domain (see docs/PENDIENTES.md). Can be overridden with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.drsalud.mx',
  locale: 'es_MX',
  serviceArea: 'Ciudad de México',
  phone: { display: '55 6875 8605', e164: '+525568758605' },
  whatsapp: { number: '525568758605' },
  instagram: {
    handle: '@doctorsaludoficial',
    url: 'https://www.instagram.com/doctorsaludoficial/',
  },
  linkedin: { url: 'https://www.linkedin.com/company/dr-salud/' },
  availability: 'Atención 24 horas',
  copyright: '© 2026 Dr. Salud. Todos los derechos reservados.',
} as const;

export const whatsappMessages = {
  empresas: 'Hola, quiero una propuesta para mi empresa',
  personas: 'Hola, quiero información sobre sus servicios',
} as const;

export const proposalHref = '/empresas#propuesta';

export const mainNav: Cta[] = [
  { label: 'Empresas', href: '/empresas' },
  { label: 'Personas', href: '/personas' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Cómo funciona', href: '/como-funciona' },
  { label: 'Nosotros', href: '/nosotros' },
];

export const footer = {
  sections: [
    { label: 'Para empresas', href: '/empresas' },
    { label: 'Para personas', href: '/personas' },
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Equipo médico', href: '/nosotros#equipo' },
    { label: 'Solicitar propuesta', href: proposalHref },
  ] satisfies Cta[],
  quote: {
    eyebrow: 'Informes y cotizaciones',
    text: 'Escríbenos y armamos el programa de tu equipo.',
    whatsapp: 'Escríbenos por WhatsApp',
  },
  columns: [
    {
      title: 'Empresas',
      links: [
        { label: 'Programas de salud', href: '/empresas#servicios' },
        { label: 'Cómo se arma un programa', href: '/empresas#programa' },
        { label: 'Interpretación y seguimiento', href: '/como-funciona' },
        { label: 'Solicitar propuesta', href: proposalHref },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Consultas', href: '/servicios#prevencion' },
        { label: 'Check-ups', href: '/servicios#prevencion' },
        { label: 'Laboratorio y pruebas rápidas', href: '/servicios#prevencion' },
        { label: 'Vacunación', href: '/servicios#vacunacion' },
        { label: 'Educación en salud', href: '/servicios#interpretacion' },
      ],
    },
    {
      title: 'Dr. Salud',
      links: [
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Equipo médico', href: '/nosotros#equipo' },
        { label: 'Nuestra visión', href: '/nosotros#vision' },
        { label: 'Preguntas frecuentes', href: '/como-funciona#preguntas' },
      ],
    },
  ],
  /**
   * Legal links. Only pages with real text are listed. To activate Términos y condiciones or
   * Política de cookies: create the page, add its content, and set `enabled: true`.
   */
  legal: {
    title: 'Legal',
    links: [
      { label: 'Aviso de privacidad', href: '/aviso-de-privacidad', enabled: true },
      { label: 'Términos y condiciones', href: '/terminos-y-condiciones', enabled: false },
      { label: 'Política de cookies', href: '/politica-de-cookies', enabled: false },
    ],
  },
  partnersLabel: 'En colaboración con',
};

export const ui = {
  skipLink: 'Saltar al contenido',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  proposal: 'Solicitar propuesta',
  whatsapp: 'WhatsApp',
  whatsappWrite: 'Escribir por WhatsApp',
  whatsappPrefer: 'Prefiero escribir por WhatsApp',
  viewServices: 'Ver servicios',
  faqTitle: 'Preguntas frecuentes',
  quickActions: 'Acciones rápidas',
  notFound: {
    title: 'No encontramos esta página',
    text: 'Puede que el enlace haya cambiado. Vuelve al inicio o escríbenos por WhatsApp.',
    home: 'Ir al inicio',
  },
} as const;
