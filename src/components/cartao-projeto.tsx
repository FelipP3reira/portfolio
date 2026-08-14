import { Briefcase, ExternalLink, Github, Lock, Star } from 'lucide-react';

import type { Projeto } from '@/lib/github-tipos';

// Nome de repositório vira título legível: Sistema_Notificacoes → Sistema Notificacoes.
function titulo(nome: string): string {
  return nome.replace(/[_-]/g, ' ');
}

export function CartaoProjeto({ projeto }: { projeto: Projeto }) {
  // O card inteiro só vira link quando há para onde ir.
  const destino = projeto.url ?? projeto.demo;

  return (
    <article
      className={`group border-borda bg-superficie hover:border-acento/40 hover:bg-superficie-alta relative flex flex-col rounded-xl border p-5 transition-colors ${
        projeto.destaque ? 'ring-acento/20 ring-1' : ''
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-mono text-base font-medium">
          {destino ? (
            <a
              href={destino}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-acento after:absolute after:inset-0 after:content-['']"
            >
              {titulo(projeto.nome)}
            </a>
          ) : (
            titulo(projeto.nome)
          )}
        </h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {projeto.privado && (
            <span className="text-texto-fraco border-borda flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px]">
              <Briefcase size={11} aria-hidden />
              cliente
            </span>
          )}
          {projeto.destaque && (
            <span className="text-acento border-acento/30 rounded-full border px-2 py-0.5 font-mono text-[11px]">
              principal
            </span>
          )}
        </div>
      </div>

      {projeto.descricao && (
        <p className="text-texto-suave mb-4 flex-1 text-sm leading-relaxed">{projeto.descricao}</p>
      )}

      {projeto.linguagens.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-1.5">
          {projeto.linguagens.map((lang) => (
            <li
              key={lang}
              className="border-borda text-texto-fraco rounded-md border px-2 py-0.5 font-mono text-[11px]"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}

      <div className="text-texto-fraco relative z-10 mt-auto flex items-center gap-4 text-xs">
        {projeto.estrelas > 0 && (
          <span className="flex items-center gap-1">
            <Star size={13} aria-hidden />
            {projeto.estrelas}
          </span>
        )}

        {projeto.url ? (
          <a
            href={projeto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-texto flex items-center gap-1"
          >
            <Github size={13} aria-hidden />
            código
          </a>
        ) : (
          // Trabalho de cliente: explica a ausência do link em vez de só omiti-lo.
          <span
            className="flex items-center gap-1"
            title="Código fechado, de propriedade do cliente"
          >
            <Lock size={13} aria-hidden />
            código fechado
          </span>
        )}

        {projeto.demo && (
          <a
            href={projeto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-acento flex items-center gap-1"
          >
            <ExternalLink size={13} aria-hidden />
            demo
          </a>
        )}
      </div>
    </article>
  );
}
