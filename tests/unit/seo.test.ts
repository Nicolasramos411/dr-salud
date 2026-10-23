import { describe, expect, it } from 'vitest';
import { buildMetadata, medicalBusinessJsonLd } from '@/lib/seo';

describe('buildMetadata', () => {
  it('sets canonical and Open Graph URL from the path', () => {
    const meta = buildMetadata({ title: 'Empresas', description: 'd', path: '/empresas' });
    expect(meta.alternates?.canonical).toBe('/empresas');
    expect(meta.openGraph?.url).toBe('/empresas');
  });

  it('always names the brand as "Dr. Salud"', () => {
    const home = buildMetadata({ title: 'Salud que trabaja contigo', description: 'd', path: '/' });
    expect(home.openGraph?.title).toBe('Dr. Salud — Salud que trabaja contigo');
    const inner = buildMetadata({ title: 'Servicios', description: 'd', path: '/servicios' });
    expect(inner.openGraph?.title).toBe('Servicios — Dr. Salud');
  });

  it('marks pages noindex only when asked', () => {
    expect(buildMetadata({ title: 't', description: 'd', path: '/x' }).robots).toBeUndefined();
    expect(
      buildMetadata({ title: 't', description: 'd', path: '/x', noindex: true }).robots,
    ).toEqual({
      index: false,
      follow: true,
    });
  });
});

describe('medicalBusinessJsonLd', () => {
  it('has the confirmed data and no address or hours', () => {
    const data = medicalBusinessJsonLd() as Record<string, unknown>;
    expect(data['@type']).toBe('MedicalBusiness');
    expect(data.telephone).toBe('+525568758605');
    expect(data.sameAs).toHaveLength(2);
    expect(data).not.toHaveProperty('address');
    expect(data).not.toHaveProperty('openingHours');
  });
});
