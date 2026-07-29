import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { portfolio } from '@/config/portfolio';
import './globals.css';

const { perfil, links } = portfolio;

// Vercel expõe a URL de produção em VERCEL_PROJECT_PRODUCTION_URL; localmente
// cai no localhost. É a base para o OpenGraph resolver as URLs absolutas.
const urlBase = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(urlBase),
  title: `${perfil.nome} — Desenvolvedor Full Stack`,
  description: perfil.titulo,
  authors: [{ name: perfil.nome, url: links.github }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${perfil.nome} — Desenvolvedor Full Stack`,
    description: perfil.titulo,
    siteName: perfil.nome,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${perfil.nome} — Desenvolvedor Full Stack`,
    description: perfil.titulo,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-acento={portfolio.acento}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
