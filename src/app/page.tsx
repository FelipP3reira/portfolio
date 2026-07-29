import { portfolio } from '@/config/portfolio';

export default function Pagina() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6">
      <p className="text-texto-fraco font-mono text-sm">
        <span className="text-acento">{portfolio.usuarioGitHub}</span>@portfolio:~$
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {portfolio.perfil.nome}
      </h1>
      <p className="text-texto-suave mt-3 text-lg">{portfolio.perfil.titulo}</p>
      <p className="text-texto-fraco mt-8 font-mono text-sm">
        # site em construção, por fatias — as seções chegam nos próximos commits
      </p>
    </main>
  );
}
