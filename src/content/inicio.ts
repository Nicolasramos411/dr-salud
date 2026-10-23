import type { FaqContent, IconItem, NumberedItem, SectionIntro } from './types';
import { images } from './images';

export const inicio = {
  seo: {
    title: 'Salud que trabaja contigo',
    description:
      'Programas de salud preventiva para empresas en Ciudad de México: check-ups, laboratorio, vacunación e interpretación de resultados, con seguimiento después de cada jornada.',
  },
  hero: {
    eyebrow: 'Salud preventiva para empresas · Ciudad de México',
    title: 'Salud que trabaja contigo',
    text: 'Programas de salud para tus colaboradores: check-ups, laboratorio, vacunación e interpretación de resultados, con seguimiento después de cada jornada.',
    primary: 'Solicitar propuesta',
    secondary: 'Escribir por WhatsApp',
    personasLink: {
      label: '¿Buscas atención para ti? Conoce los servicios para personas →',
      href: '/personas',
    },
    image: images.inicioHero,
  },
  services: {
    intro: {
      eyebrow: 'Servicios',
      title: 'Todo lo que necesita un programa de salud preventiva',
    } satisfies SectionIntro,
    items: [
      {
        icon: 'plus-circle',
        title: 'Consultas',
        text: 'Medicina general en tu empresa o en consultorio.',
      },
      {
        icon: 'clipboard',
        title: 'Check-ups',
        text: 'Evaluaciones preventivas para todo el equipo.',
      },
      { icon: 'flask', title: 'Laboratorio', text: 'Toma de muestras durante la jornada.' },
      {
        icon: 'drop',
        title: 'Pruebas rápidas',
        text: 'Resultados en el momento para tamizajes clave.',
      },
      {
        icon: 'syringe',
        title: 'Vacunación',
        text: 'Campañas de vacunación en tus instalaciones.',
      },
      {
        icon: 'video',
        title: 'Interpretación de resultados',
        text: 'Videollamada de 20 minutos con cada colaborador.',
      },
      { icon: 'book', title: 'Educación en salud', text: 'Pláticas y materiales para tu equipo.' },
      { icon: 'pulse', title: 'Seguimiento', text: 'Presencial o telefónico.' },
    ] satisfies IconItem[],
    partner: {
      eyebrow: 'En colaboración con Eudaimonía',
      text: 'Servicios complementarios de genética nutricional o del deporte',
    },
  },
  program: {
    eyebrow: 'Para empresas',
    title: 'Cómo se arma un programa',
    text: 'Diseñamos el programa contigo a partir de tres decisiones.',
    steps: [
      {
        title: 'Qué servicios',
        text: 'Elige entre check-ups, laboratorio, pruebas rápidas, vacunación y educación.',
      },
      { title: 'Para quién y dónde', text: 'Número de colaboradores y sedes en Ciudad de México.' },
      {
        title: 'Cómo dar seguimiento',
        text: 'Seguimiento presencial, telefónico o una combinación de ambos.',
      },
    ] satisfies NumberedItem[],
  },
  journey: {
    intro: {
      eyebrow: 'Cómo funciona',
      title: 'Del check-up al seguimiento, en cuatro pasos',
    } satisfies SectionIntro,
    steps: [
      {
        title: 'Jornada en tu empresa',
        text: 'Check-up, laboratorio, pruebas rápidas y vacunación en tus instalaciones.',
        image: images.inicioPaso1,
      },
      {
        title: 'Resultados',
        text: 'Nuestro equipo médico procesa y revisa los resultados de cada colaborador, y entrega un reporte general a RH.',
        image: images.inicioPaso2,
      },
      {
        title: 'Interpretación',
        text: 'Una videollamada de 20 minutos por colaborador para explicar sus resultados.',
        image: images.inicioPaso3,
      },
      {
        title: 'Seguimiento',
        text: 'Acompañamiento presencial o telefónico según cada caso.',
        image: images.inicioPaso4,
      },
    ],
  },
  comparison: {
    title: 'Más que un check-up',
    columns: { isolated: 'Check-up aislado', program: 'Programa Dr. Salud' },
    rows: [
      { label: 'Estudios y laboratorio', isolated: 'Sí', program: 'Sí', isolatedMuted: false },
      {
        label: 'Interpretación individual de resultados',
        isolated: 'No incluida',
        program: 'Videollamada especializada',
        isolatedMuted: true,
      },
      {
        label: 'Seguimiento después de la jornada',
        isolated: 'No incluido',
        program: 'Sí',
        isolatedMuted: true,
      },
      {
        label: 'Educación en salud para el equipo',
        isolated: 'No incluida',
        program: 'Sí',
        isolatedMuted: true,
      },
    ],
  },
  team: {
    intro: { eyebrow: 'Equipo médico', title: 'Quién te atiende' } satisfies SectionIntro,
  },
  personasBand: {
    eyebrow: 'Para personas',
    title: 'También te atendemos a ti',
    text: 'Consultas, check-ups, laboratorio, vacunación e interpretación de resultados bajo la misma marca.',
  },
  vision: {
    badge: 'Nuestra visión',
    title: 'Hacia una red médica híbrida',
    text: 'Estamos construyendo una red que combine atención en empresas, consultorios propios o aliados y seguimiento continuo.',
    pillars: ['En empresas', 'Consultorios', 'Seguimiento'],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué incluye un programa para empresas?',
        answer:
          'Lo armamos contigo: servicios, número de colaboradores y sedes, y modalidad de seguimiento.',
      },
      {
        question: '¿Cómo funciona la interpretación de resultados?',
        answer: 'Cada colaborador tiene una videollamada de 20 minutos con nuestro equipo médico.',
      },
      {
        question: '¿En qué zonas atienden?',
        answer: 'Atendemos en Roma Sur, Condesa, Satélite, entre otras zonas.',
      },
      {
        question: '¿También atienden a personas?',
        answer: 'Sí, con los mismos servicios y bajo la misma marca. Escríbenos por WhatsApp.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer:
          'El precio depende del programa o del servicio que elijas. Cada empresa recibe una propuesta a la medida.',
      },
      {
        question: '¿Cómo empiezo?',
        answer: 'Escríbenos por WhatsApp o llámanos y te orientamos.',
      },
    ],
  } satisfies FaqContent,
  proposal: {
    title: 'Arma el programa de salud de tu equipo',
    text: 'Cuéntanos sobre tu empresa y te enviamos una propuesta.',
  },
};
