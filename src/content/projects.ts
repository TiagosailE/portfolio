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
      pt: "Jogo de adivinhação geográfica, estilo GeoGuessr, só com lugares de Paulo Afonso. Está no ar com domínio próprio.",
      en: "A GeoGuessr-style geography game built only with places from Paulo Afonso, live on its own domain.",
    },
    role: {
      pt: "Time de 4 pessoas · autor de 25 dos 29 PRs mergeados",
      en: "Team of 4 · author of 25 of the 29 merged PRs",
    },
    proof: {
      pt: "Na partida ranqueada, quem manda é o servidor: o relógio fica no back-end e o palpite é gravado de forma atômica, então não dá pra ganhar tempo nem pontuar duas vezes.",
      en: "Ranked matches are server-authoritative: the clock lives on the back end and each guess is written atomically, so nobody gets extra time or scores twice.",
    },
    stack: ["React 19", "TypeScript", "three.js", "Leaflet", "Fastify", "Drizzle", "PostgreSQL", "Docker"],
    links: [
      { label: { pt: "Jogar", en: "Play it" }, href: "https://paguessr.com" },
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/Bruno0M/PAguessr" },
    ],
    cover: wide("/projects/paguessr/01-titulo.webp", "Tela de título do PAguessr com a cachoeira e o monumento de Paulo Afonso", "PAguessr title screen with Paulo Afonso's waterfall and monument"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "Começou como trabalho da disciplina de Jogos Digitais na UniRios e virou jogo de verdade, no ar em paguessr.com. A ideia é a do GeoGuessr: você vê uma foto do Street View e marca no mapa onde acha que ela foi tirada, só que com as ruas e os pontos turísticos de Paulo Afonso. O repositório é do Bruno, colega de turma. Entrei como qualquer contribuidor, com branch e pull request revisado.",
        en: "It started as a Digital Games course project at UniRios and became a real game, live at paguessr.com. The idea is GeoGuessr's: you see a Street View photo and mark on the map where you think it was taken, but only with the streets and landmarks of Paulo Afonso. The repository belongs to Bruno, a classmate. I joined like any contributor, through branches and reviewed pull requests.",
      },
      contributions: [
        { pt: "Partida ranqueada: 5 rodadas de 60 segundos com o tempo controlado no servidor.", en: "Ranked match: 5 rounds of 60 seconds with the clock controlled by the server." },
        { pt: "API de ranking com abas de semana e geral, devolvendo a posição do jogador mesmo quando ele está fora da lista.", en: "Ranking API with weekly and all-time tabs that returns the player's position even when they are off the list." },
        { pt: "Campeonatos com sala de espera e duelo ao vivo sincronizado pelo relógio do servidor.", en: "Tournaments with a waiting room and live duels synced to the server clock." },
        { pt: "Pódio 3D do ranking com react-three-fiber.", en: "3D ranking podium built with react-three-fiber." },
        { pt: "Redesign da interface inteira como menu de jogo, com a paleta tirada da arte.", en: "Full interface redesign as a game menu, with the palette taken from the artwork." },
        { pt: "Limites de uso: rate limit no login e nas partidas, e um teto diário de buscas na API do Google.", en: "Usage limits: rate limiting on login and matches, plus a daily cap on Google API lookups." },
      ],
      decisions: [
        {
          title: { pt: "O servidor manda no tempo", en: "The server owns the clock" },
          body: {
            pt: "O navegador só desenha o relógio. O início de cada rodada fica gravado no banco e o palpite é aceito ou recusado lá. Mexer no relógio do computador não dá segundo extra.",
            en: "The browser only draws the clock. Each round's start time is stored in the database and guesses are accepted or rejected there. Changing the computer's clock gives no extra seconds.",
          },
        },
        {
          title: { pt: "Palpite atômico", en: "Atomic guesses" },
          body: {
            pt: "O palpite é gravado com um UPDATE condicional que só acerta a linha se a rodada ainda não tiver pontos. Clique duplo ou duas abas abertas não pontuam duas vezes.",
            en: "A guess is saved with a conditional UPDATE that only matches the row if the round has no score yet. A double click or two open tabs can't score twice.",
          },
        },
        {
          title: { pt: "Seguir a política do Google", en: "Playing by Google's rules" },
          body: {
            pt: "A imagem do Street View não pode ser guardada no servidor, só o ID do panorama. Pra proteger a cota, o proxy só busca imagem com a rodada aberta, no máximo 3 vezes por rodada, e existe um teto diário para o jogo todo.",
            en: "Street View images can't be stored on the server, only the panorama ID. To protect the quota, the proxy only fetches images while a round is open, at most 3 times per round, under a daily cap for the whole game.",
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
      pt: "App de treino para corredores amadores. É meu Trabalho de Conclusão e está em uso por participantes reais.",
      en: "A training app for amateur runners. It's my capstone project and is being used by real participants.",
    },
    role: {
      pt: "Projeto solo · dez/2025 até hoje · 54 PRs",
      en: "Solo project · Dec 2025 to today · 54 PRs",
    },
    proof: {
      pt: "A IA monta o plano, mas quem decide a carga é o código: limites calculados em Ruby, cada número validado e um plano de reserva se a IA falhar.",
      en: "The AI drafts the plan, but code decides the load: limits computed in Ruby, every number validated and a fallback plan if the AI fails.",
    },
    stack: ["Ruby on Rails 8.1", "Hotwire", "Tailwind CSS", "PostgreSQL", "Gemini API", "OAuth", "Docker"],
    links: [
      {
        label: { pt: "Abrir o app", en: "Open the app" },
        href: "https://runify.onrender.com",
        note: { pt: "pode levar 1 minuto pra acordar", en: "may take a minute to wake up" },
      },
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/Runify" },
    ],
    coverKind: "phone",
    phones: runifyPhones,
    caseStudy: {
      context: {
        pt: "É o meu Trabalho de Conclusão de Graduação. Corredor amador costuma seguir planilha genérica, ou nenhuma. O Runify monta um plano a partir do perfil de quem corre, ajusta pelo retorno dos treinos e transforma a rotina em algo social, com grupos, ranking e conquistas. Está em uso com participantes reais para a coleta de dados do TG, que entrego em novembro de 2026.",
        en: "This is my undergraduate capstone. Amateur runners usually follow a generic spreadsheet, or nothing at all. Runify builds a plan from the runner's profile, adjusts it from workout feedback and makes the routine social, with groups, rankings and achievements. Real participants are using it for the capstone's data collection, due in November 2026.",
      },
      contributions: [
        { pt: "Plano de treino gerado pelo Gemini, com os limites de carga calculados em Ruby.", en: "Training plans generated by Gemini, with load limits computed in Ruby." },
        { pt: "Ajuste semanal do plano a partir do retorno de cada treino.", en: "Weekly plan adjustments based on feedback from each workout." },
        { pt: "Pacers: grupos que entram por código, com ranking, XP, níveis e conquistas.", en: "Pacers: invite-code groups with rankings, XP, levels and achievements." },
        { pt: "Login com Google, integração opcional com o Strava e notificações de treino.", en: "Google sign-in, optional Strava integration and workout notifications." },
        { pt: "LGPD: aceite de termos, exportação dos próprios dados e exclusão de conta.", en: "Brazilian data protection (LGPD): terms consent, personal data export and account deletion." },
        { pt: "Deploy no Render com Docker, arquivos no Cloudflare R2, e-mail pelo Resend e erros no Sentry.", en: "Deployed on Render with Docker, files on Cloudflare R2, email through Resend and errors in Sentry." },
      ],
      decisions: [
        {
          title: { pt: "A IA não decide a carga", en: "The AI doesn't decide the load" },
          body: {
            pt: "Distância, pace e volume semanal saem de um envelope calculado em Ruby a partir do perfil. Cada número do plano passa por um validador. Se a IA falhar ou inventar, entra um plano conservador montado sem IA.",
            en: "Distance, pace and weekly volume come from an envelope computed in Ruby from the profile. Every number in the plan goes through a validator. If the AI fails or makes things up, a conservative plan built without AI takes over.",
          },
        },
        {
          title: { pt: "Ajuste com freio", en: "Adjustments with brakes" },
          body: {
            pt: "O plano muda no máximo uma vez por semana, com aumento limitado a 10% e redução a 20%. Progressão brusca é o que mais machuca corredor iniciante.",
            en: "The plan changes at most once a week, with increases capped at 10% and reductions at 20%. Sudden progression is what hurts beginner runners the most.",
          },
        },
        {
          title: { pt: "Strava opcional", en: "Strava as an extra" },
          body: {
            pt: "A conta gratuita de desenvolvedor do Strava aceita um atleta por vez. Em vez de depender disso, fiz do registro manual o caminho principal e deixei o Strava como bônus.",
            en: "Strava's free developer tier allows one athlete at a time. Instead of depending on it, I made manual logging the main path and left Strava as a bonus.",
          },
        },
        {
          title: { pt: "Revisão no meio do caminho", en: "A review mid-project" },
          body: {
            pt: "Antes de abrir para os participantes, parei as features e fiz uma revisão técnica de segurança, domínio e dados em 4 sprints, cada uma num PR (#77 a #80).",
            en: "Before opening it to participants, I paused features and ran a technical review of security, domain and data in 4 sprints, one PR each (#77 to #80).",
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
      pt: "Marketplace de reserva de passeios turísticos em Paulo Afonso, com sinal de 30% pago online.",
      en: "A booking marketplace for tours in Paulo Afonso, with a 30% deposit paid online.",
    },
    role: {
      pt: "Projeto solo · 47 PRs · 100% de cobertura de testes",
      en: "Solo project · 47 PRs · 100% test coverage",
    },
    proof: {
      pt: "Um teste coloca 20 threads disputando 10 vagas: nenhuma reserva a mais. E ele falha de propósito se alguém tirar o lock do banco.",
      en: "One test has 20 threads competing for 10 seats: zero overbooking. And it fails on purpose if someone removes the database lock.",
    },
    stack: ["Ruby on Rails 8.1", "PostgreSQL", "Stripe Connect", "Hotwire", "RSpec", "Kamal"],
    links: [{ label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/rota-velho-chico" }],
    cover: wide("/projects/rota/01-inicio.webp", "Página inicial do Rota Velho Chico com o cânion do São Francisco", "Rota Velho Chico home page with the São Francisco canyon"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "Marketplace pensado para as agências de Paulo Afonso: cada uma cadastra seus passeios e saídas com vagas limitadas, e o turista reserva sem criar conta, pagando 30% de sinal pelo Stripe. O resto ele acerta com a agência no dia. O foco foi um problema que parece simples e não é: duas pessoas tentando pegar a última vaga no mesmo instante.",
        en: "A marketplace built for tour agencies in Paulo Afonso: each agency lists its tours and departures with limited seats, and tourists book without an account, paying a 30% deposit through Stripe. They settle the rest with the agency on the day. The focus was a problem that looks simple and isn't: two people trying to grab the last seat at the same moment.",
      },
      contributions: [
        { pt: "Catálogo com filtro por categoria e data, calendário de saídas e reserva sem cadastro, com código para consultar depois.", en: "Catalog filtered by category and date, a departure calendar and account-free booking with a lookup code." },
        { pt: "Preço por faixa de idade e almoço opcional, com o sinal de 30% e o restante mostrados antes de pagar.", en: "Pricing by age group with optional lunch, showing the 30% deposit and the balance before paying." },
        { pt: "Stripe Checkout e Connect: o sinal vai direto para a conta de cada agência, já descontada a comissão da plataforma.", en: "Stripe Checkout and Connect: the deposit goes straight to each agency's account, minus the platform fee." },
        { pt: "Painel da agência com ocupação, próximas saídas e lista de embarque em PDF.", en: "Agency dashboard with occupancy, upcoming departures and a boarding list in PDF." },
        { pt: "Cancelamento de saída com estorno em cascata por job em segundo plano.", en: "Departure cancellation with cascading refunds through a background job." },
        { pt: "Lista de espera, avaliações, versão em inglês, CSP, rate limiting e deploy com Kamal.", en: "Waitlist, reviews, English version, CSP, rate limiting and deploys with Kamal." },
      ],
      decisions: [
        {
          title: { pt: "Lock no banco, provado em teste", en: "A database lock, proven by a test" },
          body: {
            pt: "A reserva trava a linha da saída com SELECT ... FOR UPDATE antes de contar as vagas. Um teste solta 20 threads reais ao mesmo tempo, por uma barreira, disputando 10 vagas: passam exatamente 10. Se o lock sair, o teste quebra.",
            en: "A booking locks the departure row with SELECT ... FOR UPDATE before counting seats. A test releases 20 real threads at once, through a barrier, competing for 10 seats: exactly 10 get through. If the lock goes away, the test breaks.",
          },
        },
        {
          title: { pt: "PostgreSQL de propósito", en: "PostgreSQL on purpose" },
          body: {
            pt: "Com SQLite, que aceita um escritor por vez, a disputa pela vaga nem aconteceria e a garantia ficaria sem prova. O Postgres é o que torna o problema real e a solução verificável.",
            en: "With SQLite, which allows one writer at a time, the race for a seat would never happen and the guarantee would have nothing to prove. Postgres is what makes the problem real and the fix verifiable.",
          },
        },
        {
          title: { pt: "Webhook que pode chegar duas vezes", en: "Webhooks that may arrive twice" },
          body: {
            pt: "O Stripe pode reenviar o mesmo evento. A assinatura é verificada e cada evento é processado uma vez só, então um reenvio não confirma nem estorna a reserva de novo.",
            en: "Stripe may resend the same event. The signature is verified and each event is processed only once, so a resend never confirms or refunds a booking twice.",
          },
        },
        {
          title: { pt: "Cobertura com piso travado", en: "A coverage floor in CI" },
          body: {
            pt: "Hoje a cobertura é de 100% em linha e branch, e o CI recusa o merge se ela cair abaixo de 85%.",
            en: "Coverage is at 100% for lines and branches today, and CI refuses the merge if it drops below 85%.",
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
      pt: "ERP multi-tenant para distribuidora: compras, estoque, vendas e financeiro.",
      en: "A multi-tenant ERP for distributors: purchasing, inventory, sales and finance.",
    },
    role: {
      pt: "Projeto solo · 40+ PRs · 17 decisões de arquitetura registradas",
      en: "Solo project · 40+ PRs · 17 architecture decision records",
    },
    proof: {
      pt: "Cada empresa fica isolada no banco por Row Level Security do Postgres, e os testes rodam como um usuário sem privilégio pra provar isso.",
      en: "Each company is isolated in the database by Postgres Row Level Security, and the tests run as an unprivileged user to prove it.",
    },
    stack: ["Rails 8.1 API", "React 19", "TypeScript", "TanStack Query", "PostgreSQL", "OpenAPI", "Playwright"],
    links: [
      { label: { pt: "Código", en: "Code" }, href: "https://github.com/TiagosailE/alicerce" },
      { label: { pt: "Decisões de arquitetura", en: "Architecture decisions" }, href: "https://github.com/TiagosailE/alicerce/tree/main/docs/adr" },
    ],
    cover: screen("/projects/alicerce/purchase-order.webp", "Pedido de compra recebido em parte, com itens e valores", "A purchase order received in part, with items and values"),
    coverKind: "wide",
    caseStudy: {
      context: {
        pt: "ERP para distribuidora pequena, com o ciclo fechado de compra, estoque, venda e financeiro. Cada passo deixa os outros consistentes: receber mercadoria aumenta o estoque e abre a conta a pagar na mesma transação. A empresa de demonstração é uma distribuidora fictícia de material de construção em Paulo Afonso, e uma segunda empresa existe só para provar que uma nunca vê os dados da outra. Está em desenvolvimento: compras e estoque estão prontos, e vendas é a próxima fatia.",
        en: "An ERP for small distributors, built around the closed loop of purchasing, inventory, sales and finance. Each step keeps the others consistent: receiving goods raises stock and opens the payable in the same transaction. The demo company is a fictional building materials distributor in Paulo Afonso, and a second company exists only to prove that one can never see the other's data. It's in progress: purchasing and inventory are done, and sales is the next slice.",
      },
      contributions: [
        { pt: "Identidade e acesso: empresas, papéis, sessões, convites e trilha de auditoria.", en: "Identity and access: companies, roles, sessions, invitations and an audit trail." },
        { pt: "Cadastros: produtos com conversão de unidade de compra, depósitos, clientes e fornecedores com CPF/CNPJ criptografado.", en: "Master data: products with purchase unit conversion, warehouses, customers and suppliers with encrypted tax IDs." },
        { pt: "Estoque: saldo por depósito, razão de movimentações imutável e ajuste de inventário a custo médio.", en: "Inventory: balances per warehouse, an immutable movement ledger and count adjustments at average cost." },
        { pt: "Compras: pedidos, recebimento parcial e contas a pagar parceladas.", en: "Purchasing: orders, partial receipts and payables split into installments." },
        { pt: "API escrita primeiro em OpenAPI, com o cliente TypeScript do React gerado a partir dela.", en: "Schema-first OpenAPI, with the React app's TypeScript client generated from it." },
        { pt: "CI com teste de navegador contra a imagem de produção, Trivy, gitleaks e CodeQL.", en: "CI with browser tests against the production image, Trivy, gitleaks and CodeQL." },
      ],
      decisions: [
        {
          title: { pt: "Isolamento em duas camadas", en: "Isolation in two layers" },
          body: {
            pt: "Toda tabela carrega a empresa, o escopo da aplicação falha fechado sem empresa definida e o Row Level Security do Postgres filtra cada consulta. A suíte inteira roda com o mesmo usuário sem privilégio da produção, e um teste quebra o build se uma rota da API não tiver teste de isolamento.",
            en: "Every table carries the company, the app scope fails closed without one, and Postgres Row Level Security filters every query. The whole suite runs as the same unprivileged user as production, and a test breaks the build if an API route has no isolation test.",
          },
        },
        {
          title: { pt: "Estoque que não se reescreve", en: "A ledger that can't be rewritten" },
          body: {
            pt: "Cada movimentação guarda quantidade, valor e o saldo depois dela. UPDATE, DELETE e TRUNCATE são barrados por permissão e trigger, e uma CHECK impede saldo negativo sem autorização registrada.",
            en: "Each movement stores its quantity, value and the balance after it. UPDATE, DELETE and TRUNCATE are blocked by privileges and triggers, and a CHECK prevents negative stock without a recorded allowance.",
          },
        },
        {
          title: { pt: "Locks sempre na mesma ordem", en: "Locks in one global order" },
          body: {
            pt: "Todo comando que mexe em estoque trava as linhas na mesma ordem, com timeout que responde 409 em vez de travar a requisição. Os testes de concorrência soltam threads reais ao mesmo tempo.",
            en: "Every command that touches stock locks rows in the same order, with a timeout that answers 409 instead of hanging. Concurrency tests release real threads together.",
          },
        },
        {
          title: { pt: "Escrita crítica idempotente", en: "Idempotent critical writes" },
          body: {
            pt: "Recebimento e ajuste de estoque exigem uma chave de idempotência. Repetir a requisição devolve o resultado original, e a mesma chave com outro conteúdo é recusada.",
            en: "Receipts and stock adjustments require an idempotency key. Replaying the request returns the original result, and the same key with a different body is refused.",
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
      pt: "Acervo do iPhone com a linha do tempo desenhada em escala real. HTML, CSS e JavaScript puros.",
      en: "An iPhone archive with a timeline drawn to real scale. Plain HTML, CSS and JavaScript.",
    },
    role: { pt: "Projeto solo", en: "Solo project" },
    proof: {
      pt: "Lighthouse 98/100/100/100 e nenhuma violação de acessibilidade (WCAG 2.2 AA).",
      en: "Lighthouse 98/100/100/100 and zero accessibility violations (WCAG 2.2 AA).",
    },
    stack: ["HTML", "CSS", "JavaScript", "Playwright", "Lighthouse CI"],
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
      pt: "PWA de aprendizagem para alunos com dislexia e TDAH, com painel e relatórios para professores.",
      en: "A learning PWA for students with dyslexia and ADHD, with a dashboard and reports for teachers.",
    },
    role: { pt: "Feito em dupla", en: "Built as a pair" },
    proof: {
      pt: "Relatórios em PDF gerados com IA para o professor acompanhar cada aluno.",
      en: "AI-generated PDF reports so teachers can follow each student.",
    },
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Gemini API"],
    links: [{ label: { pt: "Código", en: "Code" }, href: "https://github.com/jjeancarlos/focus" }],
  },
];

export const caseStudies = featured.filter((project) => project.caseStudy);

export function findCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
