import type { Project, Shot } from "./types";

const wide = (src: string, pt: string, en: string, height = 1000): Shot => ({
  src,
  alt: { pt, en },
  width: 1600,
  height,
});

const screen = (src: string, pt: string, en: string) => wide(src, pt, en, 900);

const phone = (src: string, pt: string, en: string): Shot => ({
  src,
  alt: { pt, en },
  width: 780,
  height: 1800,
});

const runifyPhones = [
  phone("/projects/runify/03-dashboard.webp", "Tela inicial do Runify com o treino do dia", "Runify home screen with the day's workout"),
  phone("/projects/runify/04-treinos.webp", "Plano de treino semanal", "Weekly training plan"),
  phone("/projects/runify/08-pacer-ranking.webp", "Ranking de um grupo de corredores", "Ranking inside a runners group"),
];

export const featured: Project[] = [
  {
    slug: "paguessr",
    name: "PAguessr",
    tagline: {
      pt: "Jogo estilo GeoGuessr só com lugares de Paulo Afonso. No ar em paguessr.com.",
      en: "A GeoGuessr-style game with only places from Paulo Afonso. Live at paguessr.com.",
    },
    role: {
      pt: "Time de 4 pessoas · 25 dos 29 PRs são meus",
      en: "Team of 4 · 25 of the 29 merged PRs are mine",
    },
    proof: {
      pt: "Partida ranqueada à prova de trapaça: o relógio e o placar ficam no servidor.",
      en: "Cheat-proof ranked matches: the clock and the score live on the server.",
    },
    stack: ["React 19", "TypeScript", "three.js", "Fastify", "PostgreSQL", "Leaflet", "Drizzle", "Docker"],
    links: [
      { label: { pt: "Jogar", en: "Play it" }, href: "https://paguessr.com" },
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/Bruno0M/PAguessr" },
    ],
    cover: wide("/projects/paguessr/01-titulo.webp", "Tela de título do PAguessr com a cachoeira e o monumento de Paulo Afonso", "PAguessr title screen with Paulo Afonso's waterfall and monument"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "Nasceu num trabalho de Jogos Digitais na UniRios e virou jogo de verdade: você vê uma foto do Street View e marca no mapa onde ela foi tirada. O repositório é do Bruno, colega de turma, e eu entrei como contribuidor, com branch e PR revisado.",
        en: "It started as a Digital Games course project at UniRios and became a real game: you see a Street View photo and mark on the map where it was taken. The repository belongs to Bruno, a classmate, and I joined as a contributor, through branches and reviewed PRs.",
      },
      contributions: [
        { pt: "Partida ranqueada: 5 rodadas de 60 segundos, com o tempo no servidor.", en: "Ranked match: 5 rounds of 60 seconds, with the clock on the server." },
        { pt: "Ranking semanal e geral, com a posição do jogador mesmo fora da lista.", en: "Weekly and all-time rankings that show the player's position even off the list." },
        { pt: "Campeonatos com sala de espera e duelo ao vivo.", en: "Tournaments with a waiting room and live duels." },
        { pt: "Pódio 3D com react-three-fiber e a interface redesenhada como menu de jogo.", en: "A 3D podium with react-three-fiber and the whole UI redesigned as a game menu." },
        { pt: "Rate limit no login e nas partidas, e teto diário na API do Google.", en: "Rate limiting on login and matches, plus a daily cap on Google API calls." },
      ],
      decisions: [
        {
          title: { pt: "O servidor manda no tempo", en: "The server owns the clock" },
          body: {
            pt: "O início da rodada fica gravado no banco e o palpite é aceito ou recusado lá. Mexer no relógio do computador não dá segundo extra.",
            en: "Each round's start is stored in the database, and guesses are accepted or rejected there. Changing the computer's clock gives no extra seconds.",
          },
        },
        {
          title: { pt: "Palpite atômico", en: "Atomic guesses" },
          body: {
            pt: "Um UPDATE condicional só grava se a rodada ainda não tiver pontos. Clique duplo ou duas abas abertas não pontuam duas vezes.",
            en: "A conditional UPDATE only writes if the round has no score yet. A double click or two open tabs can't score twice.",
          },
        },
        {
          title: { pt: "Seguir a política do Google", en: "Playing by Google's rules" },
          body: {
            pt: "O servidor guarda só o ID do panorama, nunca a imagem. A busca só acontece com a rodada aberta, até 3 vezes por rodada e com teto diário.",
            en: "The server stores only the panorama ID, never the image. Fetches only happen while a round is open, up to 3 per round, under a daily cap.",
          },
        },
      ],
      figures: [
        { value: "25/29", label: { pt: "PRs mergeados são meus", en: "merged PRs are mine" } },
        { value: "84", label: { pt: "commits meus no repositório", en: "of my commits in the repo" } },
        { value: "70%", label: { pt: "cobertura mínima exigida no CI", en: "minimum coverage enforced in CI" } },
      ],
      gallery: [
        wide("/projects/paguessr/02-menu.webp", "Menu do jogo sobre o mapa ilustrado da cidade", "Game menu over the illustrated city map"),
        wide("/projects/paguessr/03-ranking.webp", "Pódio 3D do ranking", "3D ranking podium"),
      ],
      galleryKind: "wide",
    },
  },
  {
    slug: "runify",
    name: "Runify",
    tagline: {
      pt: "App de treino para corredores amadores. Meu Trabalho de Conclusão, em uso por participantes reais.",
      en: "A training app for amateur runners. My capstone project, used by real participants.",
    },
    role: {
      pt: "Projeto solo · 54 PRs",
      en: "Solo project · 54 PRs",
    },
    proof: {
      pt: "A IA monta o plano, mas quem decide a carga é o código, com plano de reserva se a IA falhar.",
      en: "The AI drafts the plan, but code decides the load, with a fallback if the AI fails.",
    },
    stack: ["Ruby on Rails 8.1", "Hotwire", "PostgreSQL", "Gemini API", "Tailwind CSS", "OAuth", "Docker"],
    links: [
      {
        label: { pt: "Abrir o app", en: "Open the app" },
        href: "https://runify.onrender.com",
        note: { pt: "pode demorar 1 min", en: "may take a minute" },
      },
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/Runify" },
    ],
    coverKind: "phone",
    phones: runifyPhones,
    caseStudy: {
      context: {
        pt: "Meu Trabalho de Conclusão de Graduação. O Runify monta o plano de treino pelo perfil de quem corre, ajusta pelo retorno de cada treino e deixa a rotina social, com grupos e ranking. Está em uso com participantes reais para a coleta de dados, com entrega em novembro de 2026.",
        en: "My undergraduate capstone. Runify builds a training plan from the runner's profile, adjusts it from each workout's feedback and makes the routine social, with groups and rankings. Real participants are using it for data collection, due in November 2026.",
      },
      contributions: [
        { pt: "Plano gerado pelo Gemini, com limites de carga calculados em Ruby.", en: "Plans generated by Gemini, with load limits computed in Ruby." },
        { pt: "Ajuste semanal do plano pelo retorno de cada treino.", en: "Weekly plan adjustments from each workout's feedback." },
        { pt: "Pacers: grupos por código, com ranking, XP, níveis e conquistas.", en: "Pacers: invite-code groups with rankings, XP, levels and achievements." },
        { pt: "Login com Google, Strava opcional e LGPD (exportação e exclusão de dados).", en: "Google sign-in, optional Strava and LGPD compliance (data export and deletion)." },
        { pt: "Deploy com Docker no Render, arquivos no R2, e-mail pelo Resend e erros no Sentry.", en: "Docker deploy on Render, files on R2, email through Resend and errors in Sentry." },
      ],
      decisions: [
        {
          title: { pt: "A IA não decide a carga", en: "The AI doesn't decide the load" },
          body: {
            pt: "Distância, pace e volume saem de limites calculados em Ruby, e cada número do plano passa por um validador. Se a IA falhar, entra um plano conservador montado sem ela.",
            en: "Distance, pace and volume come from limits computed in Ruby, and every number in the plan is validated. If the AI fails, a conservative plan built without it takes over.",
          },
        },
        {
          title: { pt: "Ajuste com freio", en: "Adjustments with brakes" },
          body: {
            pt: "O plano muda no máximo uma vez por semana, até +10% ou -20%. Progressão brusca é o que mais machuca corredor iniciante.",
            en: "The plan changes at most once a week, up to +10% or -20%. Sudden progression is what hurts beginner runners the most.",
          },
        },
        {
          title: { pt: "Revisão no meio do caminho", en: "A review mid-project" },
          body: {
            pt: "Antes de abrir para os participantes, parei as features e revisei segurança, domínio e dados em 4 PRs (#77 a #80).",
            en: "Before opening it to participants, I paused features and reviewed security, domain and data in 4 PRs (#77 to #80).",
          },
        },
      ],
      figures: [
        { value: "150+", label: { pt: "commits", en: "commits" } },
        { value: "54", label: { pt: "PRs mergeados", en: "merged PRs" } },
        { value: "43", label: { pt: "arquivos de teste", en: "test files" } },
      ],
      gallery: [
        phone("/projects/runify/01-boas-vindas.webp", "Tela de boas-vindas", "Welcome screen"),
        phone("/projects/runify/05-nova-atividade.webp", "Registro de uma corrida", "Logging a run"),
        phone("/projects/runify/06-historico.webp", "Histórico de atividades", "Activity history"),
        phone("/projects/runify/07-pacers.webp", "Lista de grupos (Pacers)", "Group list (Pacers)"),
        phone("/projects/runify/09-perfil.webp", "Perfil com nível e conquistas", "Profile with level and achievements"),
        phone("/projects/runify/02-login.webp", "Login com e-mail ou Google", "Sign in with email or Google"),
      ],
      galleryKind: "phone",
    },
  },
  {
    slug: "rota-velho-chico",
    name: "Rota Velho Chico",
    tagline: {
      pt: "Marketplace de passeios turísticos em Paulo Afonso, com sinal pago online pelo Stripe.",
      en: "A tour booking marketplace in Paulo Afonso, with deposits paid online through Stripe.",
    },
    role: {
      pt: "Projeto solo · 47 PRs · 100% de cobertura",
      en: "Solo project · 47 PRs · 100% coverage",
    },
    proof: {
      pt: "Um teste coloca 20 threads disputando 10 vagas: nenhuma reserva a mais.",
      en: "One test has 20 threads racing for 10 seats: zero overbooking.",
    },
    stack: ["Ruby on Rails 8.1", "PostgreSQL", "Stripe Connect", "Hotwire", "RSpec", "Kamal"],
    links: [{ label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/rota-velho-chico" }],
    cover: wide("/projects/rota/01-inicio.webp", "Página inicial do Rota Velho Chico com o cânion do São Francisco", "Rota Velho Chico home page with the São Francisco canyon"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "Marketplace para as agências de Paulo Afonso: cada uma cadastra passeios com vagas limitadas, e o turista reserva sem criar conta, pagando 30% de sinal pelo Stripe. O desafio central: duas pessoas tentando pegar a última vaga no mesmo instante.",
        en: "A marketplace for tour agencies in Paulo Afonso: each one lists tours with limited seats, and tourists book without an account, paying a 30% deposit through Stripe. The core challenge: two people grabbing the last seat at the same moment.",
      },
      contributions: [
        { pt: "Catálogo, calendário de saídas e reserva sem cadastro, com código de consulta.", en: "Catalog, departure calendar and account-free booking with a lookup code." },
        { pt: "Preço por faixa de idade, com sinal e restante mostrados antes de pagar.", en: "Pricing by age group, showing the deposit and balance before paying." },
        { pt: "Stripe Connect: o sinal cai direto na conta da agência, já sem a comissão.", en: "Stripe Connect: deposits go straight to the agency, minus the platform fee." },
        { pt: "Painel da agência com ocupação e lista de embarque em PDF.", en: "Agency dashboard with occupancy and a PDF boarding list." },
        { pt: "Cancelamento com estorno em cascata, lista de espera, avaliações e deploy com Kamal.", en: "Cancellations with cascading refunds, waitlist, reviews and Kamal deploys." },
      ],
      decisions: [
        {
          title: { pt: "Lock no banco, provado em teste", en: "A database lock, proven by a test" },
          body: {
            pt: "A reserva trava a linha da saída com SELECT ... FOR UPDATE antes de contar as vagas. No teste, 20 threads reais disputam 10 vagas e passam exatamente 10. Sem o lock, o teste quebra.",
            en: "A booking locks the departure row with SELECT ... FOR UPDATE before counting seats. In the test, 20 real threads race for 10 seats and exactly 10 get through. Without the lock, the test breaks.",
          },
        },
        {
          title: { pt: "PostgreSQL de propósito", en: "PostgreSQL on purpose" },
          body: {
            pt: "Com SQLite, que aceita um escritor por vez, a disputa pela vaga nem aconteceria e a garantia ficaria sem prova.",
            en: "With SQLite, which allows one writer at a time, the race for a seat would never happen and the guarantee would go unproven.",
          },
        },
        {
          title: { pt: "Webhook que pode chegar duas vezes", en: "Webhooks that may arrive twice" },
          body: {
            pt: "O Stripe pode reenviar o mesmo evento. A assinatura é verificada e cada evento é processado uma vez só.",
            en: "Stripe may resend the same event. The signature is verified and each event is processed only once.",
          },
        },
      ],
      figures: [
        { value: "20 × 10", label: { pt: "threads disputando vagas no teste", en: "threads racing for seats in the test" } },
        { value: "100%", label: { pt: "de cobertura em linha e branch", en: "line and branch coverage" } },
        { value: "47", label: { pt: "PRs mergeados", en: "merged PRs" } },
      ],
      gallery: [
        wide("/projects/rota/02-passeios.webp", "Catálogo de passeios com preço por pessoa", "Tour catalog with price per person"),
        wide("/projects/rota/03-passeio.webp", "Página do passeio com fotos do cânion", "Tour page with canyon photos"),
        wide("/projects/rota/04-reserva.webp", "Resumo da reserva com o sinal de 30%", "Booking summary with the 30% deposit"),
      ],
      galleryKind: "wide",
    },
  },
  {
    slug: "alicerce",
    name: "Alicerce",
    status: { pt: "Em desenvolvimento", en: "In progress" },
    tagline: {
      pt: "ERP multi-tenant para distribuidoras: compras, estoque, vendas e financeiro.",
      en: "A multi-tenant ERP for distributors: purchasing, inventory, sales and finance.",
    },
    role: {
      pt: "Projeto solo · 40+ PRs · 17 decisões de arquitetura",
      en: "Solo project · 40+ PRs · 17 ADRs",
    },
    proof: {
      pt: "Cada empresa isolada no próprio Postgres, com Row Level Security, e testes que provam isso.",
      en: "Each company is isolated inside Postgres with Row Level Security, and tests prove it.",
    },
    stack: ["Rails 8.1 API", "React 19", "TypeScript", "PostgreSQL", "OpenAPI", "TanStack Query", "Playwright"],
    links: [
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/alicerce" },
      { label: { pt: "Decisões de arquitetura", en: "Architecture decisions" }, href: "https://github.com/TiagosailE/alicerce/tree/main/docs/adr" },
    ],
    cover: screen("/projects/alicerce/purchase-order.webp", "Pedido de compra recebido em parte, com itens e valores", "A purchase order received in part, with items and values"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "ERP para distribuidora pequena em que compra, estoque, venda e financeiro ficam sempre consistentes: receber mercadoria aumenta o estoque e abre a conta a pagar na mesma transação. Compras e estoque estão prontos, e vendas é a próxima fatia.",
        en: "An ERP for small distributors where purchasing, inventory, sales and finance stay consistent: receiving goods raises stock and opens the payable in the same transaction. Purchasing and inventory are done, and sales is the next slice.",
      },
      contributions: [
        { pt: "Empresas, papéis, sessões, convites e trilha de auditoria.", en: "Companies, roles, sessions, invitations and an audit trail." },
        { pt: "Cadastros com conversão de unidade de compra e CPF/CNPJ criptografado.", en: "Master data with purchase unit conversion and encrypted tax IDs." },
        { pt: "Estoque por depósito, razão de movimentações imutável e ajuste a custo médio.", en: "Stock per warehouse, an immutable movement ledger and average-cost adjustments." },
        { pt: "Pedidos de compra, recebimento parcial e contas a pagar parceladas.", en: "Purchase orders, partial receipts and payables in installments." },
        { pt: "API escrita primeiro em OpenAPI, com o cliente TypeScript gerado a partir dela.", en: "Schema-first OpenAPI, with the TypeScript client generated from it." },
      ],
      decisions: [
        {
          title: { pt: "Isolamento em duas camadas", en: "Isolation in two layers" },
          body: {
            pt: "O escopo da aplicação falha fechado sem empresa definida, e o Row Level Security do Postgres filtra cada consulta. A suíte roda com o mesmo usuário sem privilégio da produção.",
            en: "The app scope fails closed without a company, and Postgres Row Level Security filters every query. The suite runs as the same unprivileged user as production.",
          },
        },
        {
          title: { pt: "Estoque que não se reescreve", en: "A ledger that can't be rewritten" },
          body: {
            pt: "Cada movimentação guarda o saldo depois dela. UPDATE e DELETE são barrados por permissão e trigger.",
            en: "Each movement stores the balance after it. UPDATE and DELETE are blocked by privileges and triggers.",
          },
        },
        {
          title: { pt: "Locks sempre na mesma ordem", en: "Locks in one global order" },
          body: {
            pt: "Todo comando de estoque trava as linhas na mesma ordem, com timeout que responde 409 em vez de travar a requisição.",
            en: "Every stock command locks rows in the same order, with a timeout that answers 409 instead of hanging.",
          },
        },
      ],
      figures: [
        { value: "17", label: { pt: "decisões de arquitetura registradas", en: "architecture decision records" } },
        { value: "4/7", label: { pt: "fatias do roteiro prontas", en: "roadmap slices done" } },
        { value: "90%", label: { pt: "cobertura mínima de linhas no CI", en: "minimum line coverage in CI" } },
      ],
      gallery: [
        screen("/projects/alicerce/stock-balances.webp", "Saldos de estoque por produto e depósito", "Stock balances by product and warehouse"),
        screen("/projects/alicerce/stock-movements.webp", "Razão de movimentações com o saldo depois de cada linha", "Movement ledger with the balance after each line"),
        screen("/projects/alicerce/payables.webp", "Contas a pagar criadas pelos recebimentos, em parcelas", "Payables created by receipts, in installments"),
        screen("/projects/alicerce/stock-balances-dark.webp", "Tema escuro", "Dark theme"),
      ],
      galleryKind: "wide",
    },
  },
];

export const more: Project[] = [
  {
    slug: "arquivo-iphone",
    name: "Arquivo iPhone",
    tagline: {
      pt: "Acervo do iPhone com a linha do tempo desenhada em escala real.",
      en: "An iPhone archive with a timeline drawn to real scale.",
    },
    role: { pt: "Projeto solo", en: "Solo project" },
    proof: {
      pt: "Lighthouse 98/100/100/100 e zero violações de acessibilidade (WCAG 2.2 AA).",
      en: "Lighthouse 98/100/100/100 and zero accessibility violations (WCAG 2.2 AA).",
    },
    stack: ["HTML", "CSS", "JavaScript", "Playwright"],
    links: [
      { label: { pt: "Ver site", en: "Visit" }, href: "https://tiagosaile.github.io/SITEIPHONE/" },
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/SITEIPHONE" },
    ],
  },
  {
    slug: "focus",
    name: "Focus",
    badge: { pt: "2º lugar · Hackathon SIF/UniRios 2026", en: "2nd place · SIF/UniRios Hackathon 2026" },
    tagline: {
      pt: "PWA de aprendizagem para alunos com dislexia e TDAH.",
      en: "A learning PWA for students with dyslexia and ADHD.",
    },
    role: { pt: "Feito em dupla", en: "Built as a pair" },
    proof: {
      pt: "Relatórios em PDF gerados com IA para o professor acompanhar cada aluno.",
      en: "AI-generated PDF reports so teachers can follow each student.",
    },
    stack: ["Ruby on Rails", "PostgreSQL", "Gemini API"],
    links: [{ label: { pt: "Código", en: "Code" }, href: "https://github.com/jjeancarlos/focus" }],
  },
];

export const caseStudies = featured.filter((project) => project.caseStudy);

export function findCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
