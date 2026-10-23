import type { IconItem } from './types';

export const doctor = {
  name: 'Dr. Luis Tiburcio',
  role: 'Médico cirujano general',
  license: 'Cédula profesional 12203981',
  university: 'Universidad Nacional Autónoma de México (UNAM)',
};

export const teamPanel = {
  title: 'Un equipo completo cuidando de tu equipo',
  text: 'Especialistas coordinados que dan seguimiento a la salud de tu gente durante todo el año.',
  tags: ['Medicina', 'Enfermería', 'Nutrición', 'Vacunación', 'Coordinación'],
};

export const partners = {
  eudaimonia: {
    name: 'Eudaimonía',
    src: '/partners/logo-eudaimonia.svg',
    alt: 'Eudaimonía',
    width: 385,
    height: 74,
  },
  uniceq: {
    name: 'UNICEQ',
    src: '/partners/logo-uniceq.svg',
    alt: 'UNICEQ, Universidad Central de Querétaro',
    width: 661,
    height: 198,
  },
};

export const followUp: IconItem[] = [
  {
    icon: 'home',
    title: 'Presencial',
    text: 'En tu empresa o en nuestro consultorio, como te resulte más cómodo.',
  },
  {
    icon: 'phone',
    title: 'Por teléfono',
    text: 'Una llamada para revisar cómo vas y resolver dudas.',
  },
];
