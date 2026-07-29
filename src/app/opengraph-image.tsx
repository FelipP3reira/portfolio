import { ImageResponse } from 'next/og';

import { portfolio } from '@/config/portfolio';

// Imagem que aparece quando o link é compartilhado (LinkedIn, etc). Gerada
// estática no build. O texto é mantido sem acentos de propósito: a fonte
// padrão do next/og não carrega glifos custom, então evitamos "tofu".
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${portfolio.perfil.nome} — Desenvolvedor Full Stack`;

const ACENTO = '#22d3ee';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        padding: '80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 24,
          border: '1px solid #23232a',
          borderRadius: 20,
        }}
      />
      <div style={{ color: ACENTO, fontSize: 26, fontFamily: 'monospace' }}>
        {`${portfolio.usuarioGitHub}@portfolio:~$ whoami`}
      </div>
      <div style={{ color: '#e8e8ea', fontSize: 84, fontWeight: 700, marginTop: 24 }}>
        {portfolio.perfil.nome}
      </div>
      <div style={{ color: '#a1a1aa', fontSize: 38, marginTop: 8 }}>Desenvolvedor Full Stack</div>
      <div style={{ color: '#71717a', fontSize: 26, fontFamily: 'monospace', marginTop: 40 }}>
        PHP/Laravel · Node/TS · Python · React · PostgreSQL
      </div>
    </div>,
    size,
  );
}
