interface SecaoProps {
  id: string;
  titulo: string;
  children: React.ReactNode;
}

// Wrapper padrão de seção: âncora para o menu, título com o prefixo mono de
// terminal e o respiro consistente entre blocos.
export function Secao({ id, titulo, children }: SecaoProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24">
      <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight">
        <span className="text-acento font-mono text-lg" aria-hidden>
          #
        </span>
        {titulo}
      </h2>
      {children}
    </section>
  );
}
