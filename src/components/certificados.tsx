import { ArrowUpRight, Award } from 'lucide-react';

import { portfolio } from '@/config/portfolio';
import { Secao } from './secao';

export function Certificados() {
  return (
    <Secao id="certificados" titulo="Certificados e formação">
      <ul className="max-w-2xl divide-y divide-[var(--color-borda)]">
        {portfolio.certificados.map((cert) => {
          const conteudo = (
            <>
              <Award size={18} className="text-acento mt-0.5 shrink-0" aria-hidden />
              <span className="flex-1">
                <span className="block font-medium">{cert.titulo}</span>
                <span className="text-texto-suave text-sm">
                  {cert.instituicao} · {cert.ano}
                </span>
              </span>
              {cert.link && (
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="text-texto-fraco group-hover:text-acento mt-1 shrink-0 transition-colors"
                />
              )}
            </>
          );

          return (
            <li key={`${cert.titulo}-${cert.ano}`}>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 py-4"
                >
                  {conteudo}
                </a>
              ) : (
                <div className="flex items-start gap-3 py-4">{conteudo}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
