'use client';

import { useEffect, useRef, useState } from 'react';

// Fade-in sutil quando a seção entra na tela. Sem JS o conteúdo já aparece
// (fallback no <noscript> do layout); com prefers-reduced-motion, aparece na
// hora, sem transição.
export function Revelar({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas[0]?.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div ref={ref} className="revelar" data-visivel={visivel}>
      {children}
    </div>
  );
}
