import { describe, expect, it } from 'vitest';
import { images } from '@/content/images';
import { footer } from '@/content/site';
import { servicios } from '@/content/servicios';

describe('content integrity', () => {
  it('every image slot has alt text and art direction', () => {
    for (const image of Object.values(images)) {
      expect(image.alt.length).toBeGreaterThan(5);
      expect(image.direction.length).toBeGreaterThan(5);
    }
  });

  it('service category ids are unique (they are used as anchors)', () => {
    const ids = servicios.categories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('only shows legal links that are enabled, and only the privacy notice for now', () => {
    const enabled = footer.legal.links.filter((l) => l.enabled).map((l) => l.href);
    expect(enabled).toEqual(['/aviso-de-privacidad']);
  });
});
