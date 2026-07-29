import { Hero } from '@/components/hero';
import { Projetos } from '@/components/projetos';
import { Sobre } from '@/components/sobre';

export default function Pagina() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Projetos />
    </main>
  );
}
