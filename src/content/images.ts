import type { SiteImage } from './types';

/**
 * Every photo slot on the site. To use a real photo: put the file in public/images/ and set `src`
 * (the expected path is listed in docs/IMAGENES.md). While `src` is null, a placeholder is shown.
 */
export const images = {
  inicioHero: {
    src: '/images/inicio-hero.jpg',
    alt: 'Médica de Dr. Salud explica resultados a un colaborador en una sala de juntas.',
    ratio: '4 / 3',
    direction:
      'Médica de Dr. Salud atendiendo a un colaborador en una sala de juntas real. Luz natural, uniforme de la marca.',
  },
  inicioPaso1: {
    src: '/images/inicio-paso-1.jpg',
    alt: 'Enfermera de Dr. Salud toma una muestra de sangre a una colaboradora en una oficina.',
    ratio: '4 / 3',
    direction: 'Toma de muestras en la oficina',
    label: 'FOTO: toma de muestras en la oficina',
  },
  inicioPaso2: {
    src: '/images/inicio-paso-2.jpg',
    alt: 'Médico de Dr. Salud revisa resultados de laboratorio en su laptop dentro de un consultorio luminoso.',
    ratio: '4 / 3',
    direction: 'Médico revisando resultados',
    label: 'FOTO: médico revisando resultados',
  },
  inicioPaso3: {
    src: '/images/inicio-paso-3.jpg',
    alt: 'Colaborador en su escritorio en una videollamada con una médica que le explica sus resultados.',
    ratio: '4 / 3',
    direction: 'Colaborador en videollamada con su médica',
    label: 'FOTO: colaborador en videollamada con su médica',
  },
  inicioPaso4: {
    src: '/images/inicio-paso-4.jpg',
    alt: 'Mujer habla por teléfono con calma en su departamento, recibiendo el seguimiento de su médico.',
    ratio: '4 / 3',
    direction: 'Llamada de seguimiento',
    label: 'FOTO: llamada de seguimiento',
  },
  empresasHero: {
    src: '/images/empresas-hero.jpg',
    alt: 'Jornada de salud en una oficina: una enfermera toma una muestra mientras otros colaboradores esperan su turno.',
    ratio: '4 / 3',
    direction:
      'Jornada de salud en una oficina de CDMX: colaboradores en toma de muestras con personal de Dr. Salud.',
  },
  personasHero: {
    src: '/images/personas-hero.jpg',
    alt: 'Médica explica resultados con un gesto abierto a un paciente en un consultorio pequeño y luminoso.',
    ratio: '4 / 3',
    direction:
      'Médico explicando resultados a un paciente en consultorio, con calma y contacto visual.',
  },
  personasInterpretacion: {
    src: '/images/personas-interpretacion.jpg',
    alt: 'Médica y paciente revisan juntas unos resultados impresos en el sofá de un departamento en la Roma.',
    ratio: '4 / 3',
    direction: 'Paciente revisando sus resultados impresos con su médica, ambos sonriendo.',
  },
  comoFuncionaVideollamada: {
    src: '/images/como-funciona-videollamada.jpg',
    alt: 'Colaboradora en su escritorio hace una pregunta a su médico durante una videollamada.',
    ratio: '4 / 3',
    direction:
      'Colaborador en videollamada con su médica desde su escritorio, con sus resultados a la mano.',
  },
  nosotrosHero: {
    src: '/images/nosotros-hero.jpg',
    alt: 'Personal médico con uniforme y colaboradores durante una jornada de salud en una oficina.',
    ratio: '4 / 3',
    direction:
      'Retrato grupal del equipo médico de Dr. Salud, con uniforme de la marca, en un espacio de trabajo real.',
  },
  nosotrosHistoria: {
    src: '/images/nosotros-historia.jpg',
    alt: 'Enfermera toma una muestra a un colaborador durante una jornada de salud en una oficina.',
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

/** The four circular avatars of the team panel (decorative, so alt is empty). AI-generated and illustrative; replace with real team photos. */
export const teamAvatars: { src: string | null; alt: string }[] = [
  { src: '/team/equipo-1.jpg', alt: '' },
  { src: '/team/equipo-2.jpg', alt: '' },
  { src: '/team/equipo-3.jpg', alt: '' },
  { src: '/team/equipo-4.jpg', alt: '' },
];
