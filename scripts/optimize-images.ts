// Copies the photos in assets/fotos/ (never modified) into public/ resized and compressed.
// Re-runnable: pnpm exec tsx scripts/optimize-images.ts
// Each slot has two candidates (-a / -b); change `variant` below to switch which one the site uses.
// inicio-paso-2 uses -b because -a has white letterbox bars around the picture.
import { mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const SOURCE = 'assets/fotos';

type Job = {
  /** File name in assets/fotos without the -a/-b suffix and extension. */
  source: string;
  /** Destination under public/, without extension. */
  out: string;
  kind: 'photo' | 'avatar';
  variant: 'a' | 'b';
};

const jobs: Job[] = [
  { source: 'inicio-hero', out: 'images/inicio-hero', kind: 'photo', variant: 'a' },
  {
    source: 'inicio-paso-1-toma-de-muestras',
    out: 'images/inicio-paso-1',
    kind: 'photo',
    variant: 'a',
  },
  {
    source: 'inicio-paso-2-revision-resultados',
    out: 'images/inicio-paso-2',
    kind: 'photo',
    variant: 'b',
  },
  {
    source: 'inicio-paso-3-videollamada',
    out: 'images/inicio-paso-3',
    kind: 'photo',
    variant: 'a',
  },
  { source: 'inicio-paso-4-seguimiento', out: 'images/inicio-paso-4', kind: 'photo', variant: 'a' },
  { source: 'empresas-hero-jornada', out: 'images/empresas-hero', kind: 'photo', variant: 'a' },
  { source: 'personas-hero-consulta', out: 'images/personas-hero', kind: 'photo', variant: 'a' },
  {
    source: 'personas-interpretacion',
    out: 'images/personas-interpretacion',
    kind: 'photo',
    variant: 'a',
  },
  {
    source: 'como-funciona-videollamada',
    out: 'images/como-funciona-videollamada',
    kind: 'photo',
    variant: 'a',
  },
  // Nosotros reuses the unused -b variants of two existing scenes until real team photos exist.
  { source: 'empresas-hero-jornada', out: 'images/nosotros-hero', kind: 'photo', variant: 'b' },
  {
    source: 'inicio-paso-1-toma-de-muestras',
    out: 'images/nosotros-historia',
    kind: 'photo',
    variant: 'b',
  },
  { source: 'equipo-avatar-1-enfermeria', out: 'team/equipo-1', kind: 'avatar', variant: 'a' },
  { source: 'equipo-avatar-2-nutricion', out: 'team/equipo-2', kind: 'avatar', variant: 'a' },
  { source: 'equipo-avatar-3-vacunacion', out: 'team/equipo-3', kind: 'avatar', variant: 'a' },
  { source: 'equipo-avatar-4-coordinacion', out: 'team/equipo-4', kind: 'avatar', variant: 'a' },
];

const presets = {
  photo: { width: 2000, height: 1500, quality: 85 },
  avatar: { width: 800, height: 800, quality: 88 },
} as const;

const kb = (bytes: number) => `${(bytes / 1024).toFixed(0)} KB`;

await mkdir('public/images', { recursive: true });
await mkdir('public/team', { recursive: true });

for (const job of jobs) {
  const input = join(SOURCE, `${job.source}-${job.variant}.jpg`);
  const output = join('public', `${job.out}.jpg`);
  const { width, height, quality } = presets[job.kind];

  const meta = await sharp(input).metadata();
  // Same aspect ratio in and out, so nothing is cropped or stretched.
  if (meta.width && meta.height && Math.abs(meta.width / meta.height - width / height) > 0.01) {
    throw new Error(`${input} is ${meta.width}x${meta.height}; expected ${width}:${height}`);
  }

  await sharp(input)
    .resize(width, height, { kernel: 'lanczos3', fit: 'fill', withoutEnlargement: true })
    .toColourspace('srgb') // metadata (EXIF/ICC) is dropped by default
    .jpeg({ quality, progressive: true, mozjpeg: true })
    .toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  console.log(`${output.padEnd(52)} ${kb(before).padStart(7)} -> ${kb(after).padStart(7)}`);
}
