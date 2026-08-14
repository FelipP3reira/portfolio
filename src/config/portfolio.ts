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

export interface ProjetoPrivado {
  nome: string;
  descricao: string;
  /** Tecnologias, já que não há endpoint de linguagens para consultar. */
  stack: string[];
  /** Link para a aplicação no ar, se fizer sentido divulgar. */
  demo?: string;
  destaque?: boolean;
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
    instagram: string;
    email: string;
    cv: string;
  };
  destaques: Destaque[];
  /**
   * Allowlist: só estes repositórios aparecem no grid (mais os destaques, que
   * entram sempre). Mantém os exercícios de curso fora da vitrine — um projeto
   * novo só aparece quando você o adiciona aqui.
   */
  mostrar: string[];
  /**
   * Projetos sem repositório público — trabalho de cliente, cujo código é
   * fechado. Entram no grid junto com os do GitHub, com um selo próprio.
   */
  projetosPrivados: ProjetoPrivado[];
  habilidades: Record<string, string[]>;
  certificados: Certificado[];
}

export const portfolio: Portfolio = {
  usuarioGitHub: 'FelipP3reira',
  acento: 'ciano',

  perfil: {
    nome: 'Felipe Pereira',
    titulo: 'Desenvolvedor Full Stack com o peso no backend — Python, PHP e Node.js.',
    bio: [
      'Sou desenvolvedor na EnterScience, onde construo software sob demanda para clientes — do backend e da modelagem de dados às integrações. No dia a dia, PHP/Laravel, Node/TypeScript e Python (Flask, FastAPI), com SQL Server e PostgreSQL no banco.',
      'Cheguei ao desenvolvimento pelo caminho mais longo: vim do setor financeiro, onde aprendi a ler um problema até o fim antes de escrever a primeira linha e a me importar com o que acontece quando algo dá errado em produção. Troquei de área para construir as ferramentas, não só usá-las — e sigo me formando em Análise e Desenvolvimento de Sistemas no IFSP.',
      'Sou Full Stack com o peso no backend: fico à vontade com React/TypeScript no front, mas é no servidor que gosto de morar. Já construí desde um pipeline de transcrição de vídeo 100% local com FastAPI e Faster-Whisper até a fila de jobs, o RAG e o sistema de notificações que você vê abaixo — cada projeto resolve um problema real, com as decisões escritas no README.',
    ],
    localizacao: 'Barretos, SP · aberto a remoto',
  },

  links: {
    github: 'https://github.com/FelipP3reira',
    linkedin: 'https://www.linkedin.com/in/felipe-pereira03',
    instagram: 'https://www.instagram.com/felipepg_/',
    email: 'felipegopereira01@gmail.com',
    cv: '/cv.pdf',
  },

  // Sobem para o topo, marcados como principais. A ordem aqui é a ordem exibida.
  destaques: [
    {
      repo: 'Gateway_Pagamentos',
      descricao:
        'Gateway de pagamentos (sandbox) que abstrai provedores — Stripe, um provider fake e PIX — atrás de uma interface comum. Máquina de estados com transições explícitas, webhooks com assinatura verificada e idempotência à prova de cobrança dupla. O PIX gera o QR/copia-e-cola (BR Code EMV + CRC16) de verdade.',
    },
    {
      repo: 'Sistema_Notificacoes',
      descricao:
        'Serviço de notificações multicanal (in-app, e-mail, webhook) com preferências por usuário, entrega assíncrona com retry por canal e agrupamento em digest. Idempotência garantida no banco, sob corrida.',
    },
    {
      repo: 'Sistema_Cache',
      descricao:
        'Biblioteca de cache escrita do zero em Python: políticas de evicção trocáveis (LRU, LFU em O(1) e TTL), duas camadas com invalidação coerente entre instâncias e proteção contra cache stampede. O README compara as políticas e diz onde cada uma perde.',
    },
    {
      repo: 'Sistema_Filas',
      descricao:
        'Fila de jobs caseira sobre Redis, com scripts Lua atômicos, retry com backoff, dead-letter queue e recuperação de jobs travados por lease. A base reaproveitada em outros projetos.',
    },
    {
      repo: 'Chatbot',
      descricao:
        'Chatbot com RAG em FastAPI + pgvector, streaming por SSE, resiliência do provedor de LLM e defesas contra prompt injection e XSS.',
    },
  ],

  // Os projetos que entram na vitrine. Os destaques acima já entram sozinhos;
  // aqui vai o resto que vale mostrar. Tudo que não estiver aqui fica de fora.
  mostrar: [
    'Gerenciador_Tarefas',
    'Sistema_Upload_Arquivos',
    'Encurtador_URLs',
    'Sistema_Autenticacao',
    'APi_Rest',
    'Peaple_flow',
  ],

  // Trabalho de cliente: o código é fechado, então não vem do GitHub.
  projetosPrivados: [
    {
      nome: 'Dashboard para Educadores Físicos',
      descricao:
        'Sistema sob medida para um profissional de educação física administrar seus alunos: cadastro com anamnese, avaliação física com adipômetro (protocolo Pollock de 7 dobras) calculando percentual de gordura e composição corporal, evolução em gráficos, montagem de treinos com arrastar e soltar, agenda e relatórios em PDF. Projeto entregue e em produção.',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      destaque: true,
    },
  ],

  habilidades: {
    Linguagens: ['TypeScript', 'PHP', 'Python', 'SQL'],
    Frontend: ['React', 'Next.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Fastify', 'Laravel', 'FastAPI'],
    Banco: ['PostgreSQL', 'SQL Server', 'Redis'],
    Ferramentas: ['Docker', 'Git', 'Vitest', 'Kysely'],
  },

  certificados: [
    {
      titulo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      instituicao: 'IFSP — Instituto Federal de São Paulo',
      ano: 2026,
    },
    {
      titulo: 'Formação Cientista de Dados: O Curso Completo (47h)',
      instituicao: 'Udemy',
      ano: 2026,
    },
    {
      titulo: 'Cambridge English (nível B1/B2)',
      instituicao: 'Cambridge Assessment English',
      ano: 2020,
    },
    {
      titulo: 'Laravel (PHP)',
      instituicao: 'EnterScience',
      ano: 2025,
    },
    {
      titulo: 'Node.js',
      instituicao: 'EnterScience',
      ano: 2025,
    },
  ],
};
