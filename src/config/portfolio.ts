/**
 * O único arquivo que você edita para manter o site. Os componentes leem tudo
 * daqui; nenhum texto ou dado pessoal fica espalhado no código.
 *
 * Os projetos vêm da API do GitHub em tempo de build; aqui você só escolhe
 * quais destacar (com uma descrição sua mais rica) e quais esconder.
 */

export type Acento = 'ciano' | 'verde' | 'ambar';

export interface Destaque {
  /** Nome exato do repositório no GitHub. */
  repo: string;
  /** Sua descrição, mais rica que a do GitHub. Opcional: sem ela, usa a do repo. */
  descricao?: string;
}

export interface Certificado {
  titulo: string;
  instituicao: string;
  ano: number;
  link?: string;
}

export interface Portfolio {
  usuarioGitHub: string;
  acento: Acento;
  perfil: {
    nome: string;
    titulo: string;
    bio: string[];
    localizacao: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    cv: string;
  };
  destaques: Destaque[];
  ignorados: {
    repos: string[];
    ignorarForks: boolean;
  };
  habilidades: Record<string, string[]>;
  certificados: Certificado[];
}

export const portfolio: Portfolio = {
  usuarioGitHub: 'FelipP3reira',
  acento: 'ciano',

  perfil: {
    nome: 'Felipe Pereira',
    titulo: 'Desenvolvedor Full Stack — backend sólido, React no front.',
    bio: [
      'Sou desenvolvedor Full Stack com o peso no backend. Trabalho com PHP/Laravel, Node/TypeScript e Python/FastAPI no servidor, e com React/TypeScript no front. No banco, PostgreSQL e SQL Server.',
      'Cheguei ao desenvolvimento pelo caminho mais longo: vim do setor financeiro, onde aprendi a ler um problema até o fim antes de tocar no código e a me importar com o que acontece quando algo dá errado em produção. Troquei de área para construir as ferramentas, não só usá-las.',
      'Gosto de sistemas que se explicam sozinhos: idempotência onde a corrida acontece, filas com retry e dead-letter, testes de integração de verdade. O que você vê nos projetos abaixo é isso — cada um resolve um problema real, com as decisões escritas no README.',
    ],
    localizacao: 'Brasil',
  },

  links: {
    github: 'https://github.com/FelipP3reira',
    linkedin: 'https://www.linkedin.com/in/felipe-pereira',
    email: 'felipegopereira01@gmail.com',
    cv: '/cv.pdf',
  },

  // Sobem para o topo, marcados como principais. A ordem aqui é a ordem exibida.
  destaques: [
    {
      repo: 'Sistema_Notificacoes',
      descricao:
        'Serviço de notificações multicanal (in-app, e-mail, webhook) com preferências por usuário, entrega assíncrona com retry por canal e agrupamento em digest. Idempotência garantida no banco, sob corrida.',
    },
    {
      repo: 'Sistema_Filas',
      descricao:
        'Fila de jobs caseira sobre Redis, com scripts Lua atômicos, retry com backoff, dead-letter queue e recuperação de jobs travados por lease. A base reaproveitada em outros projetos.',
    },
    {
      repo: 'Chatbot_RAG',
      descricao:
        'Chatbot com RAG em FastAPI + pgvector, streaming por SSE, resiliência do provedor de LLM e defesas contra prompt injection e XSS.',
    },
  ],

  ignorados: {
    // O próprio repo do site e o que não é vitrine.
    repos: ['portfolio', 'FelipP3reira'],
    ignorarForks: true,
  },

  habilidades: {
    Linguagens: ['TypeScript', 'PHP', 'Python', 'SQL'],
    Frontend: ['React', 'Next.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Fastify', 'Laravel', 'FastAPI'],
    Banco: ['PostgreSQL', 'SQL Server', 'Redis'],
    Ferramentas: ['Docker', 'Git', 'Vitest', 'Kysely'],
  },

  certificados: [
    {
      titulo: 'Cambridge English (nível B1/B2)',
      instituicao: 'Cambridge Assessment English',
      ano: 2023,
    },
    {
      titulo: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'Graduação (Tecnólogo)',
      ano: 2025,
    },
  ],
};
