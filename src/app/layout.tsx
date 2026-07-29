import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { AlternarTema } from '@/components/alternar-tema';
import { portfolio } from '@/config/portfolio';
import './globals.css';

// Aplica o tema salvo antes da primeira pintura, para não piscar. O padrão é
// escuro; só muda se o visitante já escolheu claro antes.
const scriptTema = `(function(){try{var t=localStorage.getItem('tema');document.documentElement.dataset.tema=(t==='claro'||t==='escuro')?t:'escuro';}catch(e){}})();`;

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
      data-tema="escuro"
      data-acento={portfolio.acento}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
        {/* Sem JS, o fade-in não roda: força as seções visíveis. */}
        <noscript>
          <style>{`.revelar{opacity:1 !important;translate:none !important;}`}</style>
        </noscript>
        <a
          href="#conteudo"
          className="bg-superficie text-acento border-borda focus:ring-acento sr-only rounded-md border px-4 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Pular para o conteúdo
        </a>
        <AlternarTema />
        {children}
      </body>
    </html>
  );
}
