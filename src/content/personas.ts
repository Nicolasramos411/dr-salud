import type { FaqContent, IconItem, NumberedItem, SectionIntro } from './types';
import { images } from './images';

export const personas = {
  seo: {
    title: 'Consultas, check-ups y laboratorio para personas',
    description:
      'Consultas, check-ups, laboratorio y vacunación con un médico que te explica qué significan tus resultados. Atención en Ciudad de México.',
  },
  hero: {
    eyebrow: 'Para personas',
    title: 'Entiende tus resultados. Conoce tus siguientes pasos.',
    text: 'Consultas, check-ups, laboratorio y vacunación con un médico que te explica qué significan tus resultados.',
    image: images.personasHero,
  },
  services: {
    intro: { eyebrow: 'Servicios', title: 'Lo que podemos hacer por ti' } satisfies SectionIntro,
    items: [
      {
        icon: 'plus-circle',
        title: 'Consulta médica',
        text: 'Atención de medicina general para resolver tus dudas de salud.',
      },
      {
        icon: 'clipboard',
        title: 'Check-up preventivo',
        text: 'Una evaluación de tu salud antes de que aparezcan síntomas.',
      },
      {
        icon: 'flask',
        title: 'Laboratorio',
        text: 'Toma de muestras con procesamiento en laboratorio de referencia.',
      },
      {
        icon: 'drop',
        title: 'Pruebas rápidas',
        text: 'Resultados en poco tiempo para tamizajes clave.',
      },
      {
        icon: 'syringe',
        title: 'Vacunación',
        text: 'Vacunas según tu edad y tus necesidades.',
      },
      {
        icon: 'video',
        title: 'Interpretación de resultados',
        text: 'Un médico revisa contigo cada resultado y lo que significa.',
      },
    ] satisfies IconItem[],
  },
  journey: {
    intro: {
      eyebrow: 'Cómo funciona',
      title: 'Tu cuidado no termina en la consulta',
    } satisfies SectionIntro,
    steps: [
      {
        title: 'Cuéntanos qué necesitas',
        text: 'Escríbenos y te orientamos sobre el servicio adecuado.',
      },
      {
        title: 'Consulta o estudios',
        text: 'Te atendemos en casa o en consultorio con el servicio que elegiste.',
      },
      {
        title: 'Interpretación',
        text: 'Un médico te explica tus resultados y responde tus preguntas.',
      },
      { title: 'Seguimiento', text: 'Te acompañamos de forma presencial o por teléfono.' },
    ] satisfies NumberedItem[],
  },
  interpretation: {
    eyebrow: 'Interpretación',
    title: 'Recibir resultados es un paso. Entenderlos también.',
    points: [
      'Qué significa cada resultado, en palabras claras',
      'Qué valores conviene vigilar',
      'Cuáles son tus siguientes pasos',
    ],
    image: images.personasInterpretacion,
  },
  partner: {
    eyebrow: 'En colaboración con Eudaimonía',
    title: 'Servicios complementarios',
    text: 'Dos manuales genéticos para cuidar tu alimentación y tu actividad física.',
    items: [
      { icon: 'sprout', label: 'Manual genético nutricional' },
      { icon: 'runner', label: 'Manual genético deportivo' },
    ] as { icon: 'sprout' | 'runner'; label: string }[],
  },
  referral: {
    title: '¿Tu empresa aún no tiene un programa de salud?',
    text: 'Recomiéndanos con tu área de Recursos Humanos.',
    cta: { label: 'Conoce los programas para empresas', href: '/empresas' },
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Quién interpreta mis resultados?',
        answer: 'Un médico de nuestro equipo revisa tus resultados contigo.',
      },
      // Pending: the address is not confirmed, so the sentence "[Confirmar dirección.]" is omitted
      // until the client provides it (see docs/PENDIENTES.md).
      { question: '¿Dónde atienden?', answer: 'En nuestro consultorio en Ciudad de México.' },
      { question: '¿Atienden en inglés?', answer: 'Sí, atendemos en español y en inglés.' },
      { question: '¿Atienden a domicilio?', answer: 'Sí. Te atendemos en casa o en consultorio.' },
      {
        question: '¿Necesito ayuno para mis estudios?',
        answer: 'Depende del estudio. Te indicamos cómo prepararte antes de tu cita.',
      },
      { question: '¿Puedo pedir factura?', answer: 'Sí, emitimos factura.' },
    ],
  } satisfies FaqContent,
  closing: {
    title: 'Cuéntanos qué necesitas',
    text: 'Te orientamos sobre el servicio adecuado para ti.',
  },
};
