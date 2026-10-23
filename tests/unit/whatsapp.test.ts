import { describe, expect, it } from 'vitest';
import { whatsappMessages } from '@/content/site';
import { whatsappFor, whatsappUrl } from '@/lib/whatsapp';

describe('whatsapp links', () => {
  it('builds the plain link', () => {
    expect(whatsappUrl()).toBe('https://wa.me/525568758605');
  });

  it('encodes a prefilled message', () => {
    expect(whatsappUrl('Hola, quiero información')).toBe(
      'https://wa.me/525568758605?text=Hola%2C%20quiero%20informaci%C3%B3n',
    );
  });

  it('uses a different message for companies and for individuals', () => {
    const empresas = whatsappFor('empresas');
    const personas = whatsappFor('personas');
    expect(empresas).not.toBe(personas);
    expect(decodeURIComponent(empresas.split('text=')[1]!)).toBe(whatsappMessages.empresas);
    expect(decodeURIComponent(personas.split('text=')[1]!)).toBe(whatsappMessages.personas);
  });
});
