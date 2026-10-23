import { Arimo, Tinos } from 'next/font/google';

// Web equivalents of Nimbus Sans / Nimbus Roman, the typefaces named in the brand manual.
export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-arimo',
});

export const tinos = Tinos({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-tinos',
});
