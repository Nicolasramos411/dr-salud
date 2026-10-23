import type { FaqContent, IconItem, SectionIntro } from './types';
import { images } from './images';

export const comoFunciona = {
  seo: {
    title: 'Cómo funciona: del primer contacto al seguimiento',
    description:
      'Así trabajamos con empresas y con personas: conversación inicial, propuesta, jornada de salud, interpretación de resultados y seguimiento.',
  },
  hero: {
    eyebrow: 'Cómo funciona',
    title: 'Del primer contacto al seguimiento',
    text: 'Así trabajamos con empresas y con personas. Cada paso está pensado para que entiendas tus resultados y sepas qué sigue.',
    navLabel: 'Recorridos',
    links: [
      { label: 'Para empresas', href: '#empresas' },
      { label: 'Para personas', href: '#personas' },
    ],
  },
  empresas: {
    intro: {
      eyebrow: 'Para empresas',
      title: 'Cinco pasos, un programa continuo',
    } satisfies SectionIntro,
    steps: [
      {
        title: 'Conversación inicial',
        text: 'Nos cuentas qué necesita tu equipo.',
        points: [
          'Por WhatsApp o llamada',
          'Número de colaboradores y sedes',
          'Servicios que te interesan',
        ],
      },
      {
        title: 'Propuesta a la medida',
        text: 'Te enviamos una propuesta con todo especificado.',
        points: ['Población', 'Alcance, paquete e inversión', 'Condiciones y seguimiento incluido'],
      },
      {
        title: 'Jornada de salud',
        text: 'Nuestro equipo atiende a tus colaboradores.',
        points: [
          'En tus instalaciones o en consultorio',
          'Horarios flexibles',
          'Atención en español e inglés',
        ],
      },
      {
        title: 'Interpretación de resultados',
        text: 'Cada colaborador entiende lo que significan sus resultados.',
        points: [
          'Videollamada de 20 minutos por colaborador',
          'Con un médico de nuestro equipo',
          'Recomendaciones claras',
        ],
      },
      {
        title: 'Seguimiento',
        text: 'Acompañamos a quien lo necesite después de la jornada.',
        points: ['Presencial o por teléfono', 'Según lo acordado en la propuesta'],
      },
    ],
  },
  videocall: {
    eyebrow: 'La videollamada',
    title: '20 minutos para entender tus resultados',
    image: images.comoFuncionaVideollamada,
    items: [
      {
        icon: 'video',
        title: 'Qué revisamos',
        text: 'Cada resultado y lo que significa para tu salud.',
      },
      {
        icon: 'chat',
        title: 'Qué puedes preguntar',
        text: 'Todas tus dudas sobre los estudios realizados.',
      },
      {
        icon: 'check',
        title: 'Con qué te quedas',
        text: 'Tus siguientes pasos, explicados por un médico.',
      },
    ] satisfies IconItem[],
  },
  personas: {
    intro: {
      eyebrow: 'Para personas',
      title: 'Tu recorrido en cuatro pasos',
    } satisfies SectionIntro,
    steps: [
      { title: 'Cuéntanos qué necesitas', text: 'Te orientamos sobre el servicio adecuado.' },
      { title: 'Consulta o estudios', text: 'Te atendemos en casa o en consultorio.' },
      { title: 'Interpretación', text: 'Un médico te explica tus resultados.' },
      { title: 'Seguimiento', text: 'Presencial o por teléfono.' },
    ],
  },
  followUp: {
    intro: { eyebrow: 'Seguimiento', title: 'Dos formas de acompañarte' } satisfies SectionIntro,
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Quién hace la interpretación?', answer: 'Un médico de nuestro equipo.' },
      {
        question: '¿Qué pasa si un resultado requiere atención?',
        answer: 'El médico te orienta sobre tus siguientes pasos y acordamos el seguimiento.',
      },
    ],
  } satisfies FaqContent,
  closing: {
    title: '¿Listo para empezar?',
    text: 'Cuéntanos qué necesita tu equipo y te enviamos una propuesta.',
  },
};
