import type { SiteImage } from './types';

/**
 * Every photo slot on the site. To use a real photo: put the file in public/images/ and set `src`
 * (the expected path is listed in docs/IMAGENES.md). While `src` is null, a placeholder is shown.
 */
export const images = {
  inicioHero: {
    src: null,
    alt: 'Médica de Dr. Salud atendiendo a un colaborador en una sala de juntas',
    ratio: '4 / 3',
    direction:
      'Médica de Dr. Salud atendiendo a un colaborador en una sala de juntas real. Luz natural, uniforme de la marca.',
  },
  inicioPaso1: {
    src: null,
    alt: 'Toma de muestras a un colaborador en la oficina',
    ratio: '4 / 3',
    direction: 'Toma de muestras en la oficina',
    label: 'FOTO: toma de muestras en la oficina',
  },
  inicioPaso2: {
    src: null,
    alt: 'Médico revisando los resultados de un colaborador',
    ratio: '4 / 3',
    direction: 'Médico revisando resultados',
    label: 'FOTO: médico revisando resultados',
  },
  inicioPaso3: {
    src: null,
    alt: 'Colaborador en videollamada con su médica',
    ratio: '4 / 3',
    direction: 'Colaborador en videollamada con su médica',
    label: 'FOTO: colaborador en videollamada con su médica',
  },
  inicioPaso4: {
    src: null,
    alt: 'Llamada de seguimiento con un colaborador',
    ratio: '4 / 3',
    direction: 'Llamada de seguimiento',
    label: 'FOTO: llamada de seguimiento',
  },
  empresasHero: {
    src: null,
    alt: 'Jornada de salud en una oficina de la Ciudad de México',
    ratio: '4 / 3',
    direction:
      'Jornada de salud en una oficina de CDMX: colaboradores en toma de muestras con personal de Dr. Salud.',
  },
  personasHero: {
    src: null,
    alt: 'Médico explicando resultados a un paciente en consultorio',
    ratio: '4 / 3',
    direction:
      'Médico explicando resultados a un paciente en consultorio, con calma y contacto visual.',
  },
  personasInterpretacion: {
    src: null,
    alt: 'Paciente revisando sus resultados impresos con su médica',
    ratio: '4 / 3',
    direction: 'Paciente revisando sus resultados impresos con su médica, ambos sonriendo.',
  },
  comoFuncionaVideollamada: {
    src: null,
    alt: 'Colaborador en videollamada con su médica desde su escritorio',
    ratio: '4 / 3',
    direction:
      'Colaborador en videollamada con su médica desde su escritorio, con sus resultados a la mano.',
  },
  nosotrosHero: {
    src: null,
    alt: 'Retrato grupal del equipo médico de Dr. Salud',
    ratio: '4 / 3',
    direction:
      'Retrato grupal del equipo médico de Dr. Salud, con uniforme de la marca, en un espacio de trabajo real.',
  },
  nosotrosHistoria: {
    src: null,
    alt: 'Fundadores y equipo en una de las primeras jornadas de salud en empresa',
    ratio: '4 / 3',
    direction: 'Fundadores o equipo en una de las primeras jornadas de salud en empresa.',
  },
  doctorTiburcio: {
    src: '/team/dr-luis-tiburcio-retrato.jpg',
    alt: 'Retrato del Dr. Luis Tiburcio, médico de Dr. Salud',
    ratio: '1 / 1',
    direction: 'Retrato del Dr. Luis Tiburcio.',
  },
} satisfies Record<string, SiteImage>;

/** The four circular avatars of the team panel. Generic until real team photos exist. */
export const teamAvatars: { src: string | null; alt: string }[] = [
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
];
