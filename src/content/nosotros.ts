import type { IconItem, SectionIntro } from './types';
import { images } from './images';

export const nosotros = {
  seo: {
    title: 'Nosotros: atención médica con explicación, orientación y seguimiento',
    description:
      'Somos un equipo médico en Ciudad de México que lleva la salud preventiva a las empresas y a las personas. Conoce nuestra historia, misión, visión y valores.',
  },
  hero: {
    eyebrow: 'Nosotros',
    title: 'Atención médica con explicación, orientación y seguimiento.',
    text: 'Somos un equipo médico en Ciudad de México que lleva la salud preventiva a las empresas y a las personas.',
    cta: { label: 'Conoce al equipo', href: '#equipo' },
    image: images.nosotrosHero,
  },
  story: {
    intro: {
      eyebrow: 'Nuestra historia',
      title: '¿Por qué existe Dr. Salud?',
    } satisfies SectionIntro,
    paragraphs: [
      'Llevamos la prevención a donde estás. Dr. Salud nace de un grupo con más de 5 años en el sector salud y experiencia certificando la salud de grandes equipos.',
      'Cuidamos a empresas, escuelas y personas que quieren dejar de reaccionar ante la enfermedad y empezar a prevenirla.',
    ],
    image: images.nosotrosHistoria,
  },
  mission: {
    label: 'Misión',
    text: 'Cuidar la salud de las personas y de los equipos de trabajo con atención médica cercana, preventiva y a la medida, para que vivan y trabajen mejor.',
  },
  vision: {
    label: 'Visión',
    text: 'Ser el servicio médico de confianza de las empresas y de las personas en México, uniendo la medicina preventiva con la ciencia.',
  },
  quote: {
    label: 'Cita',
    text: 'La mejor medicina de todas es enseñar a la gente a no necesitarla.',
    author: 'Hipócrates',
    note: 'Por eso la educación en salud es parte de cada programa: queremos que cada persona entienda su salud y sepa cuidarla.',
  },
  values: {
    intro: { eyebrow: 'Lo que nos guía', title: 'Nuestros valores' } satisfies SectionIntro,
    items: [
      {
        icon: 'repeat',
        title: 'Continuidad',
        text: 'El cuidado no termina en la consulta: acompañamos lo que sigue.',
      },
      {
        icon: 'chat',
        title: 'Claridad',
        text: 'Explicamos cada resultado en palabras que se entienden.',
      },
      {
        icon: 'users',
        title: 'Cercanía',
        text: 'Vamos a tu empresa y escuchamos a cada persona.',
      },
      {
        icon: 'shield',
        title: 'Prevención',
        text: 'Actuamos antes de que sea necesario tratar.',
      },
    ] satisfies IconItem[],
  },
  team: {
    intro: {
      eyebrow: 'Equipo médico',
      title: 'Quién te atiende',
      text: 'Médicos con cédula profesional que puedes verificar.',
    } satisfies SectionIntro,
  },
  allies: {
    intro: {
      eyebrow: 'Aliados',
      title: 'Trabajamos con aliados para ampliar lo que ofrecemos',
    } satisfies SectionIntro,
    items: [
      {
        partner: 'eudaimonia' as const,
        title: 'Eudaimonía',
        text: 'Colaboración en servicios de genética nutricional y deportiva.',
      },
      { partner: 'uniceq' as const, title: 'UNICEQ', text: 'Relación académica.' },
    ],
  },
  commitments: {
    intro: { eyebrow: 'Compromisos', title: 'Cómo cuidamos tu confianza' } satisfies SectionIntro,
    items: [
      {
        icon: 'shield',
        title: 'Privacidad',
        text: 'Tus datos se tratan conforme a nuestro aviso de privacidad.',
      },
      {
        icon: 'badge',
        title: 'Personal titulado',
        text: 'Cada médico cuenta con cédula profesional verificable.',
      },
    ] satisfies IconItem[],
  },
};
