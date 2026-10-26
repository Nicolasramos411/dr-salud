import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const alt = `${site.name} — ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Logo on white, as the brand manual requires, with the tagline below.
export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/logo-dr-salud.png'));
  const src = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <img src={src} alt="" width={566} height={246} />
      <div style={{ width: 96, height: 6, background: '#0290B4' }} />
      <div style={{ fontSize: 44, color: '#000468', fontWeight: 700 }}>{site.slogan}</div>
    </div>,
    size,
  );
}
