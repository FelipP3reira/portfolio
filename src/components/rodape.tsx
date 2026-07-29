import { FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';

import { portfolio } from '@/config/portfolio';

const { perfil, links, usuarioGitHub } = portfolio;

const contatos = [
  { href: `mailto:${links.email}`, rotulo: 'E-mail', Icone: Mail, externo: false },
  { href: links.github, rotulo: 'GitHub', Icone: Github, externo: true },
  { href: links.linkedin, rotulo: 'LinkedIn', Icone: Linkedin, externo: true },
  { href: links.instagram, rotulo: 'Instagram', Icone: Instagram, externo: true },
  { href: links.cv, rotulo: 'Currículo', Icone: FileText, externo: true },
];

export function Rodape() {
  return (
    <footer id="contato" className="border-borda mt-8 border-t">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-texto-fraco font-mono text-sm">
          <span className="text-acento">{usuarioGitHub}</span>@portfolio:~${' '}
          <span className="text-texto-suave">contato</span>
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Vamos conversar</h2>
        <p className="text-texto-suave mt-2 max-w-md">
          Aberto a oportunidades e a trocar ideia sobre backend, sistemas distribuídos e código bem
          escrito.
        </p>

        <nav aria-label="Contato" className="mt-6 flex flex-wrap gap-3">
          {contatos.map(({ href, rotulo, Icone, externo }) => (
            <a
              key={rotulo}
              href={href}
              {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="border-borda bg-superficie hover:border-acento/40 hover:text-acento inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors"
            >
              <Icone size={16} aria-hidden />
              {rotulo}
            </a>
          ))}
        </nav>

        <p className="text-texto-fraco mt-12 font-mono text-xs">
          © {new Date().getFullYear()} {perfil.nome} — feito com Next.js, na unha.
        </p>
      </div>
    </footer>
  );
}
