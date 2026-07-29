import { ArrowUpRight, FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';

import { portfolio } from '@/config/portfolio';

const { perfil, links, usuarioGitHub } = portfolio;

const atalhos = [
  { href: links.github, rotulo: 'GitHub', Icone: Github, externo: true },
  { href: links.linkedin, rotulo: 'LinkedIn', Icone: Linkedin, externo: true },
  { href: links.instagram, rotulo: 'Instagram', Icone: Instagram, externo: true },
  { href: `mailto:${links.email}`, rotulo: 'E-mail', Icone: Mail, externo: false },
  { href: links.cv, rotulo: 'Currículo', Icone: FileText, externo: true },
];

export function Hero() {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-28 pb-12 sm:pt-36">
      <p className="text-texto-fraco font-mono text-sm">
        <span className="text-acento">{usuarioGitHub}</span>@portfolio:~${' '}
        <span className="text-texto-suave">whoami</span>
      </p>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
        {perfil.nome}
        <span className="cursor ml-1.5" aria-hidden />
      </h1>

      <p className="text-texto-suave mt-4 max-w-2xl text-lg leading-relaxed sm:text-xl">
        {perfil.titulo}
      </p>

      <nav aria-label="Contatos" className="mt-8 flex flex-wrap gap-3">
        {atalhos.map(({ href, rotulo, Icone, externo }) => (
          <a
            key={rotulo}
            href={href}
            {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group border-borda bg-superficie hover:border-acento/40 hover:text-acento inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors"
          >
            <Icone size={16} aria-hidden />
            {rotulo}
            <ArrowUpRight
              size={14}
              aria-hidden
              className="text-texto-fraco group-hover:text-acento -ml-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
