import { portfolio } from '@/config/portfolio';
import { Secao } from './secao';

export function Sobre() {
  return (
    <Secao id="sobre" titulo="Sobre">
      <div className="max-w-2xl space-y-4">
        {portfolio.perfil.bio.map((paragrafo, i) => (
          <p key={i} className="text-texto-suave leading-relaxed">
            {paragrafo}
          </p>
        ))}
      </div>
    </Secao>
  );
}
