import { Certificados } from '@/components/certificados';
import { Habilidades } from '@/components/habilidades';
import { Hero } from '@/components/hero';
import { Projetos } from '@/components/projetos';
import { Rodape } from '@/components/rodape';
import { Sobre } from '@/components/sobre';

export default function Pagina() {
  return (
    <>
      {/* Hero fixo no fundo. */}
      <Hero />

      {/* Conteúdo começa uma tela abaixo e desliza por cima do hero. */}
      <div className="bg-fundo relative z-10 mt-[100dvh]">
        <main id="conteudo">
          <Sobre />
          <Projetos />
          <Habilidades />
          <Certificados />
        </main>
        <Rodape />
      </div>
    </>
  );
}
