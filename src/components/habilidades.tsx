import { portfolio } from '@/config/portfolio';
import { Secao } from './secao';

export function Habilidades() {
  const grupos = Object.entries(portfolio.habilidades);

  return (
    <Secao id="habilidades" titulo="Stack">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {grupos.map(([grupo, itens]) => (
          <div key={grupo}>
            <dt className="text-texto-fraco mb-3 font-mono text-xs tracking-wide uppercase">
              {grupo}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {itens.map((item) => (
                  <li
                    key={item}
                    className="border-borda bg-superficie text-texto-suave rounded-md border px-2.5 py-1 font-mono text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
