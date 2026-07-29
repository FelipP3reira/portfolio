import { Certificados } from '@/components/certificados';
import { Habilidades } from '@/components/habilidades';
import { Hero } from '@/components/hero';
import { Projetos } from '@/components/projetos';
import { Rodape } from '@/components/rodape';
import { Sobre } from '@/components/sobre';

export default function Pagina() {
  return (
    <>
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Certificados />
      </main>
      <Rodape />
    </>
  );
}
