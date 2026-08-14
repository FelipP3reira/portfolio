import { portfolio } from '@/config/portfolio';
import type { LinguagensGitHub, Projeto, RepoGitHub } from './github-tipos';

// Roda só no servidor (usa o token do env). Chamado de Server Components.

const API = 'https://api.github.com';
// Cache de 1 hora: no build e depois via ISR. Segura o limite de 60 req/h da
// API não autenticada — sem token, o site ainda funciona.
const REVALIDAR = 3600;
// Quantas tags de linguagem mostrar por card, as de maior peso primeiro.
const MAX_LINGUAGENS = 6;

function cabecalhos(): Record<string, string> {
  const base: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    // O GitHub exige User-Agent; sem ele a requisição é recusada.
    'User-Agent': `portfolio-${portfolio.usuarioGitHub}`,
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    base.Authorization = `Bearer ${token}`;
  }
  return base;
}

async function pegar<T>(url: string): Promise<T | null> {
  try {
    const resposta = await fetch(url, {
      headers: cabecalhos(),
      next: { revalidate: REVALIDAR },
    });
    if (!resposta.ok) {
      return null;
    }
    return (await resposta.json()) as T;
  } catch {
    // Rede fora, limite estourado, JSON inválido: o chamador decide o fallback.
    return null;
  }
}

// A ordem dos destaques no config é a ordem exibida no topo.
function indiceDestaque(nome: string): number {
  return portfolio.destaques.findIndex((d) => d.repo === nome);
}

// Allowlist: aparece quem está em `mostrar` ou é destaque. O resto (exercícios
// de curso, o próprio site) fica fora sem precisar listar cada um.
function deveMostrar(repo: RepoGitHub): boolean {
  return portfolio.mostrar.includes(repo.name) || indiceDestaque(repo.name) >= 0;
}

async function linguagensDo(repo: RepoGitHub): Promise<string[]> {
  const dados = await pegar<LinguagensGitHub>(repo.languages_url);
  if (!dados) {
    // Se o endpoint de linguagens falhar, cai na linguagem principal do repo.
    return repo.language ? [repo.language] : [];
  }
  return Object.entries(dados)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_LINGUAGENS)
    .map(([nome]) => nome);
}

function normalizar(repo: RepoGitHub, linguagens: string[]): Projeto {
  const idx = indiceDestaque(repo.name);
  const custom = idx >= 0 ? portfolio.destaques[idx]?.descricao : undefined;
  return {
    nome: repo.name,
    descricao: custom ?? repo.description,
    url: repo.html_url,
    demo: repo.homepage && repo.homepage.trim() !== '' ? repo.homepage : null,
    linguagens,
    estrelas: repo.stargazers_count,
    atualizadoEm: repo.pushed_at,
    destaque: idx >= 0,
  };
}

function ordenar(a: Projeto, b: Projeto): number {
  // Destaques primeiro, na ordem do config; depois estrelas; depois recência.
  if (a.destaque !== b.destaque) return a.destaque ? -1 : 1;

  if (a.destaque && b.destaque) {
    // Entre os destaques, trabalho de cliente abre a lista: software entregue e
    // em produção diz mais a quem recruta do que qualquer projeto de estudo.
    if (a.privado !== b.privado) return a.privado ? -1 : 1;
    return indiceDestaque(a.nome) - indiceDestaque(b.nome);
  }

  if (a.estrelas !== b.estrelas) return b.estrelas - a.estrelas;
  return b.atualizadoEm.localeCompare(a.atualizadoEm);
}

// Sem a API: monta o mínimo a partir dos destaques do config para a página não
// quebrar. É o "modo offline" — some assim que a API responder de novo.
function fallbackDoConfig(): Projeto[] {
  return portfolio.destaques.map((d) => ({
    nome: d.repo,
    descricao: d.descricao ?? null,
    url: `https://github.com/${portfolio.usuarioGitHub}/${d.repo}`,
    demo: null,
    linguagens: [],
    estrelas: 0,
    atualizadoEm: '',
    destaque: true,
  }));
}

// Trabalho de cliente entra pelo config: o repositório é fechado, então não há
// o que buscar na API.
function projetosPrivados(): Projeto[] {
  return portfolio.projetosPrivados.map((p) => ({
    nome: p.nome,
    descricao: p.descricao,
    url: null,
    demo: p.demo ?? null,
    linguagens: p.stack,
    estrelas: 0,
    // Sem data do GitHub; o desempate por recência não se aplica a estes.
    atualizadoEm: '',
    destaque: p.destaque ?? false,
    privado: true,
  }));
}

export interface ResultadoProjetos {
  projetos: Projeto[];
  // true quando a API não respondeu e caímos no config.
  offline: boolean;
}

export async function buscarProjetos(): Promise<ResultadoProjetos> {
  const repos = await pegar<RepoGitHub[]>(
    `${API}/users/${portfolio.usuarioGitHub}/repos?per_page=100&sort=pushed`,
  );

  if (!repos) {
    // Mesmo sem a API, o trabalho de cliente aparece: ele não depende dela.
    return { projetos: [...projetosPrivados(), ...fallbackDoConfig()], offline: true };
  }

  const visiveis = repos.filter(deveMostrar);
  const doGitHub = await Promise.all(
    visiveis.map(async (repo) => normalizar(repo, await linguagensDo(repo))),
  );

  const projetos = [...doGitHub, ...projetosPrivados()];
  projetos.sort(ordenar);

  return { projetos, offline: false };
}
