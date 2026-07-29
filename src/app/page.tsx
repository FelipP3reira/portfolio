import { Projetos } from '@/components/projetos';
import { portfolio } from '@/config/portfolio';

export default function Pagina() {
  return (
    <main>
      <header className="mx-auto max-w-5xl px-6 pt-24 pb-8">
        <p className="text-texto-fraco font-mono text-sm">
          <span className="text-acento">{portfolio.usuarioGitHub}</span>@portfolio:~$
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {portfolio.perfil.nome}
        </h1>
        <p className="text-texto-suave mt-3 text-lg">{portfolio.perfil.titulo}</p>
      </header>

      <Projetos />
    </main>
  );
}
