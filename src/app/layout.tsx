import type { Metadata } from 'next';
import { arimo, tinos } from './fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Dr. Salud',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${arimo.variable} ${tinos.variable}`}>
      <body>{children}</body>
    </html>
  );
}
