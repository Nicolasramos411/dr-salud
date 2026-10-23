import type { IconName } from './types';

export type Modality = 'En tu empresa' | 'En consultorio' | 'Virtual';

export type ServiceEntry = {
  icon: IconName;
  title: string;
  text: string;
  modalities: Modality[];
};

export type ServiceCategory = {
  id: string;
  navLabel: string;
  number: string;
  title: string;
  text: string;
  items: ServiceEntry[];
};

const both: Modality[] = ['En tu empresa', 'En consultorio'];

export const servicios = {
  seo: {
    title: 'Servicios de salud preventiva en tu empresa o en consultorio',
    description:
      'Consultas, chequeos, laboratorio, electrocardiograma, vacunación, pruebas rápidas, interpretación de resultados y seguimiento. Cada programa se arma a tu medida.',
  },
  hero: {
    eyebrow: 'Servicios',
    title: 'Salud preventiva en tu empresa o en consultorio',
    text: 'Estudios, vacunación, interpretación de resultados y seguimiento. Cada programa se arma según las necesidades de tu organización.',
    navLabel: 'Categorías de servicios',
  },
  categories: [
    {
      id: 'prevencion',
      navLabel: 'Prevención y diagnóstico',
      number: '01',
      title: 'Prevención y diagnóstico',
      text: 'Estudios para conocer el estado de salud de tu equipo antes de que aparezcan síntomas.',
      items: [
        {
          icon: 'plus-circle',
          title: 'Consulta médica general',
          text: 'Atención médica para colaboradores y personas.',
          modalities: both,
        },
        {
          icon: 'clipboard-check',
          title: 'Chequeos de salud ejecutivos',
          text: 'Evaluación integral con laboratorio, electrocardiograma y composición corporal.',
          modalities: both,
        },
        {
          icon: 'flask',
          title: 'Toma de muestras de laboratorio',
          text: 'En tu empresa, con procesamiento en laboratorio de referencia.',
          modalities: both,
        },
        {
          icon: 'pulse',
          title: 'Electrocardiograma (ECG)',
          text: 'Evaluación cardiaca en sitio, con interpretación y reporte.',
          modalities: both,
        },
        {
          icon: 'xray',
          title: 'Radiografía portátil',
          text: 'Estudios en tus instalaciones, con reporte profesional.',
          modalities: both,
        },
        {
          icon: 'lungs',
          title: 'Pruebas respiratorias',
          text: 'Diagnóstico rápido de influenza, COVID-19 y otras enfermedades respiratorias.',
          modalities: both,
        },
        {
          icon: 'test-tube',
          title: 'Pruebas rápidas',
          text: 'VIH, sífilis y otras pruebas según tus necesidades.',
          modalities: both,
        },
      ],
    },
    {
      id: 'vacunacion',
      navLabel: 'Vacunación',
      number: '02',
      title: 'Vacunación',
      text: 'Campañas organizadas en tus instalaciones, sin que tu equipo tenga que desplazarse.',
      items: [
        {
          icon: 'syringe',
          title: 'Campañas de vacunación',
          text: 'Influenza y otras vacunas según las necesidades de tu empresa.',
          modalities: both,
        },
      ],
    },
    {
      id: 'interpretacion',
      navLabel: 'Interpretación y seguimiento',
      number: '03',
      title: 'Interpretación y seguimiento',
      text: 'Lo que hace diferente a Dr. Salud: cada resultado se explica y cada persona sabe qué sigue.',
      items: [
        {
          icon: 'video',
          title: 'Interpretación de resultados',
          text: 'Un médico explica los resultados, tanto a empresas como a personas.',
          modalities: both,
        },
        {
          icon: 'phone',
          title: 'Seguimiento',
          text: 'Contacto presencial o por teléfono después de la consulta.',
          modalities: ['En tu empresa', 'En consultorio', 'Virtual'],
        },
        {
          icon: 'book',
          title: 'Educación en salud',
          text: 'Pláticas y materiales para que tu equipo cuide su salud.',
          modalities: ['En tu empresa'],
        },
      ],
    },
    {
      id: 'laboral',
      navLabel: 'Salud laboral',
      number: '04',
      title: 'Salud laboral',
      text: 'Apoyo médico para las obligaciones y evaluaciones de tu organización.',
      items: [
        {
          icon: 'document',
          title: 'Medicina laboral y reportes',
          text: 'Apoyo en evaluaciones médicas y generación de reportes según tus necesidades.',
          modalities: ['En tu empresa'],
        },
      ],
    },
    {
      id: 'complementarios',
      navLabel: 'Complementarios',
      number: '05',
      title: 'Servicios complementarios',
      text: 'En colaboración con Eudaimonía, en tu empresa o en consultorio.',
      items: [
        {
          icon: 'leaf',
          title: 'Perfil genético nutricional',
          text: 'Cómo tu cuerpo procesa los alimentos y los nutrientes, en colaboración con Eudaimonía.',
          modalities: both,
        },
        {
          icon: 'runner',
          title: 'Perfil genético deportivo',
          text: 'Cómo entrenar, comer y recuperarte según tu genética, en colaboración con Eudaimonía.',
          modalities: both,
        },
      ],
    },
  ] satisfies ServiceCategory[],
  closing: {
    title: '¿No encuentras lo que buscas?',
    text: 'Nos adaptamos a tus necesidades. Cuéntanos qué requiere tu equipo y armamos el programa contigo.',
  },
};
