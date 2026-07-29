'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Tema = 'claro' | 'escuro';

// Botão de tema. O tema real já foi aplicado no <html> pelo script inline do
// layout (sem flash); aqui só lemos, alternamos e guardamos a escolha.
export function AlternarTema() {
  const [tema, setTema] = useState<Tema>('escuro');
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const atual = (document.documentElement.dataset.tema as Tema | undefined) ?? 'escuro';
    setTema(atual);
    setMontado(true);
  }, []);

  function alternar() {
    const novo: Tema = tema === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.dataset.tema = novo;
    try {
      localStorage.setItem('tema', novo);
    } catch {
      // Modo privado sem storage: a troca vale só para esta sessão.
    }
    setTema(novo);
  }

  const vaiParaClaro = tema === 'escuro';

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={vaiParaClaro ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="border-borda bg-superficie/80 text-texto-suave hover:border-acento/40 hover:text-acento fixed top-4 right-4 z-40 rounded-lg border p-2.5 backdrop-blur transition-colors"
    >
      {/* Antes de montar, mostra o ícone coerente com o padrão escuro. */}
      {montado && !vaiParaClaro ? <Moon size={18} aria-hidden /> : <Sun size={18} aria-hidden />}
    </button>
  );
}
