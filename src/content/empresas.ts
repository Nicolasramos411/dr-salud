import type { FaqContent, IconItem, NumberedItem, SectionIntro } from './types';
import { images } from './images';

export const empresas = {
  seo: {
    title: 'Servicios médicos y programas de salud para empresas',
    description:
      'Servicios médicos en tu empresa o en nuestro consultorio, con interpretación de resultados y seguimiento cercano para tus colaboradores en Ciudad de México.',
  },
  hero: {
    eyebrow: 'Salud empresarial',
    title: 'La salud de tu equipo merece prevención y continuidad.',
    text: 'Servicios médicos en tu empresa o en nuestro consultorio, con interpretación de resultados y seguimiento cercano.',
    image: images.empresasHero,
  },
  highlights: [
    'En tus instalaciones o en nuestro consultorio',
    'Horarios flexibles',
    'Atención en español e inglés',
    'Nos adaptamos a tus necesidades',
  ],
  difference: {
    intro: {
      eyebrow: 'Lo que nos diferencia',
      title: 'No solo hacemos estudios: los explicamos y damos seguimiento.',
    } satisfies SectionIntro,
    steps: [
      {
        title: 'Interpretar',
        text: 'Una videollamada de 20 minutos por colaborador para explicar sus resultados.',
      },
      { title: 'Orientar', text: 'Recomendaciones claras del médico para cada persona.' },
      {
        title: 'Dar seguimiento',
        text: 'Contacto presencial o por teléfono después de la jornada.',
      },
    ] satisfies NumberedItem[],
  },
  services: {
    intro: {
      eyebrow: 'Servicios para empresas',
      title: 'Todo lo que tu programa puede incluir',
    } satisfies SectionIntro,
    allLink: { label: 'Ver todos los servicios →', href: '/servicios' },
    items: [
      {
        icon: 'syringe',
        title: 'Campañas de vacunación',
        text: 'Influenza y otras vacunas según las necesidades de tu empresa.',
      },
      {
        icon: 'clipboard-check',
        title: 'Chequeos de salud ejecutivos',
        text: 'Evaluación integral con laboratorio, electrocardiograma y composición corporal.',
      },
      {
        icon: 'lungs',
        title: 'Pruebas respiratorias',
        text: 'Diagnóstico rápido de influenza, COVID-19 y otras enfermedades respiratorias.',
      },
      {
        icon: 'flask',
        title: 'Toma de muestras de laboratorio',
        text: 'En tu empresa, con procesamiento en laboratorio de referencia.',
      },
      {
        icon: 'pulse',
        title: 'Electrocardiogramas',
        text: 'Evaluación cardiaca en sitio, con interpretación y reporte.',
      },
      {
        icon: 'xray',
        title: 'Radiografía portátil',
        text: 'Estudios en tus instalaciones, con reporte profesional.',
      },
      {
        icon: 'test-tube',
        title: 'Pruebas rápidas',
        text: 'VIH, sífilis y otras pruebas según tus necesidades.',
      },
      {
        icon: 'document',
        title: 'Medicina laboral y reportes',
        text: 'Apoyo en evaluaciones médicas y generación de reportes.',
      },
    ] satisfies IconItem[],
  },
  program: {
    eyebrow: 'A tu medida',
    title: 'Cómo se arma un programa',
    text: 'Diseñamos el programa contigo a partir de tres decisiones.',
    steps: [
      {
        title: 'Qué servicios',
        text: 'Vacunación, chequeos, laboratorio, pruebas, estudios en sitio y medicina laboral.',
      },
      {
        title: 'Para quién y dónde',
        text: 'Número de colaboradores, sedes y horarios en Ciudad de México.',
      },
      {
        title: 'Cómo dar seguimiento',
        text: 'Seguimiento presencial, telefónico o una combinación de ambos.',
      },
    ] satisfies NumberedItem[],
  },
  hiring: {
    intro: {
      eyebrow: 'Contratación',
      title: 'De la primera conversación a la jornada',
    } satisfies SectionIntro,
    steps: [
      {
        title: 'Conversación inicial',
        text: 'Nos cuentas qué necesita tu equipo por WhatsApp o por llamada.',
      },
      {
        title: 'Propuesta a la medida',
        text: 'Recibes el alcance, el paquete de servicios, la inversión y las condiciones del programa.',
      },
      {
        title: 'Jornada en tu empresa',
        text: 'Nuestro equipo atiende a tus colaboradores en tus instalaciones o en consultorio.',
      },
      {
        title: 'Interpretación y seguimiento',
        text: 'Cada colaborador entiende sus resultados y sabe cuáles son sus siguientes pasos. RH recibe un reporte general.',
      },
    ] satisfies NumberedItem[],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Atienden en nuestras instalaciones?',
        answer:
          'Sí. Podemos atender en tu empresa o en nuestro consultorio, según lo que acordemos en la propuesta.',
      },
      {
        question: '¿Qué incluye una propuesta?',
        answer:
          'Alcance, paquete de servicios personalizado, inversión y condiciones del programa.',
      },
      {
        question: '¿Cómo funciona la interpretación de resultados?',
        answer:
          'Cada colaborador tiene una videollamada de 20 minutos con un médico de nuestro equipo.',
      },
      {
        question: '¿Pueden adaptar los servicios a nuestra empresa?',
        answer: 'Sí. Armamos el programa según tus necesidades, tus sedes y tus horarios.',
      },
      { question: '¿En qué idiomas atienden?', answer: 'En español y en inglés.' },
      { question: '¿Emiten factura?', answer: 'Sí, emitimos factura.' },
      {
        question: '¿Desde cuántos colaboradores pueden atender?',
        answer: 'No hay un mínimo de colaboradores.',
      },
      {
        question: '¿Atienden empresas con varias sedes?',
        answer: 'Sí. Acordamos contigo la cobertura de cada sede.',
      },
    ],
  } satisfies FaqContent,
  proposal: {
    title: 'Arma el programa de salud de tu equipo',
    text: 'Cuéntanos sobre tu empresa y te enviamos una propuesta a la medida.',
  },
};
