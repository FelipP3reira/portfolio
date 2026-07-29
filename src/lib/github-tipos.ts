/**
 * Tipos estritos das respostas da API REST do GitHub que o site usa. Só os
 * campos que consumimos — o resto da resposta é ignorado, mas nada de `any`.
 */

// Recorte de https://api.github.com/users/{usuario}/repos
export interface RepoGitHub {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  languages_url: string;
}

// Resposta de /repos/{owner}/{repo}/languages: { "TypeScript": 12345, ... }
export type LinguagensGitHub = Record<string, number>;

/**
 * O projeto já normalizado para os componentes: junta o que veio da API com o
 * que o config acrescenta (destaque + descrição própria). É o que o grid lê.
 */
export interface Projeto {
  nome: string;
  descricao: string | null;
  url: string;
  demo: string | null;
  linguagens: string[];
  estrelas: number;
  atualizadoEm: string;
  destaque: boolean;
}
