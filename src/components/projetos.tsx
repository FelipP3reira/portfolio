import { buscarProjetos } from '@/lib/github';
import { CartaoProjeto } from './cartao-projeto';
import { Secao } from './secao';

// Server Component: busca roda no servidor (build/ISR), o token nunca vaza.
export async function Projetos() {
  const { projetos, offline } = await buscarProjetos();

  return (
    <Secao id="projetos" titulo="Projetos">
      {offline && (
        <p className="border-borda text-texto-fraco mb-6 rounded-md border border-dashed px-3 py-2 font-mono text-xs">
          # a API do GitHub não respondeu agora — mostrando os projetos em destaque
        </p>
      )}

      {projetos.length === 0 ? (
        <p className="text-texto-suave text-sm">Nenhum projeto público para mostrar ainda.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projetos.map((projeto) => (
            <CartaoProjeto key={projeto.nome} projeto={projeto} />
          ))}
        </div>
      )}
    </Secao>
  );
}
