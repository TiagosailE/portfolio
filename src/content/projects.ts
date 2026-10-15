import type { Project, Shot } from "./types";

const wide = (src: string, pt: string, en: string): Shot => ({
  src,
  alt: { pt, en },
  width: 1600,
  height: 1000,
});

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
      pt: "Projeto solo · 39 PRs · 17 decisões de arquitetura registradas",
      en: "Solo project · 39 PRs · 17 architecture decision records",
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
