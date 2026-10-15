import type { Localized } from "./types";

export const contact = {
  email: "tiagosantos.eli@gmail.com",
  whatsappDisplay: "(75) 99975-8910",
  whatsappHref: "https://wa.me/5575999758910",
  linkedin: "https://www.linkedin.com/in/tiago-santos-64a028320/",
  github: "https://github.com/TiagosailE",
  githubUser: "TiagosailE",
  repo: "https://github.com/TiagosailE/portfolio",
};

export const about: Localized[] = [
  {
    pt: "Sou de Paulo Afonso, na Bahia, e estou no último período de Sistemas de Informação na UniRios. Comecei na assistência técnica, montando e consertando computador, e passei pelo suporte de TI antes de programar todo dia. Ficou um hábito dessa época: só considero pronto o que funciona na mão de quem usa.",
    en: "I'm from Paulo Afonso, in Bahia, Brazil, and I'm in the final semester of an Information Systems degree at UniRios. I started out in computer repair, building and fixing machines, and worked in IT support before writing code every day. One habit stuck from that time: it's only done when it works for the person using it.",
  },
  {
    pt: "Hoje construo aplicações completas, do banco à interface, e gosto de deixar as decisões por escrito: registro de arquitetura, teste que prova a regra, README que explica o porquê. Também dei aula de inglês e de informática, então explicar o que estou fazendo e ler documentação em inglês faz parte da rotina.",
    en: "Today I build complete applications, from the database to the interface, and I like to leave decisions in writing: architecture records, tests that prove the rule, READMEs that explain the why. I've also taught English and computer classes, so explaining my work and reading documentation in English are part of the routine.",
  },
];

export type TimelineEntry = {
  when: Localized;
  title: Localized;
  place: string;
  detail: Localized;
  kind: "work" | "study" | "award";
};

export const timeline: TimelineEntry[] = [
  {
    when: { pt: "2020 a 2022", en: "2020 to 2022" },
    title: { pt: "Assistência técnica", en: "Computer repair technician" },
    place: "Conexão Tech",
    detail: { pt: "Manutenção e montagem de computadores e atendimento a clientes.", en: "Repairing and building computers and supporting customers." },
    kind: "work",
  },
  {
    when: { pt: "2023", en: "2023" },
    title: { pt: "Início em Sistemas de Informação", en: "Started Information Systems" },
    place: "UniRios",
    detail: { pt: "Primeiros projetos web e o primeiro repositório no GitHub.", en: "First web projects and first GitHub repository." },
    kind: "study",
  },
  {
    when: { pt: "mai a dez 2025", en: "May to Dec 2025" },
    title: { pt: "Estagiário de TI", en: "IT intern" },
    place: "Laboratório Estrela",
    detail: { pt: "Suporte técnico, redes e relatórios técnicos do setor.", en: "Technical support, networking and technical reports." },
    kind: "work",
  },
  {
    when: { pt: "dez 2025 a ago 2026", en: "Dec 2025 to Aug 2026" },
    title: { pt: "Professor de inglês e informática", en: "English and computer teacher" },
    place: "Prepara IA",
    detail: { pt: "Aulas com plano personalizado e material didático próprio para conceitos técnicos.", en: "Classes with personalized plans and my own teaching material for technical concepts." },
    kind: "work",
  },
  {
    when: { pt: "2026", en: "2026" },
    title: { pt: "2º lugar no Hackathon SIF/UniRios", en: "2nd place at the SIF/UniRios Hackathon" },
    place: "Focus",
    detail: { pt: "PWA de aprendizagem inclusiva, feito em dupla.", en: "An inclusive learning PWA, built as a pair." },
    kind: "award",
  },
  {
    when: { pt: "desde ago 2026", en: "Since Aug 2026" },
    title: { pt: "Suporte técnico em TI", en: "IT support" },
    place: "Delphin Soluções",
    detail: { pt: "Infraestrutura, chamados e manutenção de banco MySQL.", en: "Infrastructure, tickets and MySQL database maintenance." },
    kind: "work",
  },
  {
    when: { pt: "dez 2026", en: "Dec 2026" },
    title: { pt: "Conclusão do bacharelado", en: "Bachelor's degree" },
    place: "UniRios",
    detail: { pt: "Trabalho de Conclusão: o Runify.", en: "Capstone project: Runify." },
    kind: "study",
  },
];

export type StackGroup = {
  title: Localized;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    title: { pt: "No dia a dia", en: "Every day" },
    items: ["React", "TypeScript", "JavaScript", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Docker", "Git", "GitHub Actions"],
  },
  {
    title: { pt: "Também em projeto", en: "Also shipped with" },
    items: ["Node.js", "Fastify", "Hotwire", "three.js", "Leaflet", "Drizzle", "Stripe", "MySQL", "SQL Server", "React Native", "Expo", "Linux"],
  },
  {
    title: { pt: "Testes e qualidade", en: "Testing and quality" },
    items: ["RSpec", "Minitest", "Vitest", "Playwright", "Lighthouse CI", "CodeQL", "Brakeman"],
  },
  {
    title: { pt: "IA", en: "AI" },
    items: ["Claude Code", "Gemini API"],
  },
];

export type Practice = {
  title: Localized;
  body: Localized;
  excerpt?: { label: Localized; lines: string[] };
  links?: { label: string; href: string }[];
};

export const practices: Practice[] = [
  {
    title: { pt: "Um manual por projeto", en: "A manual for each project" },
    body: {
      pt: "Uma skill com arquitetura, comandos e regras que a IA lê antes de tocar em qualquer coisa.",
      en: "A skill with architecture, commands and rules that the AI reads before touching anything.",
    },
    excerpt: {
      label: { pt: "trecho de skills/runify/SKILL.md", en: "excerpt from skills/runify/SKILL.md" },
      lines: [
        "name: runify",
        "description: Como trabalhar no projeto Rails \"Runify\". Carrega o contrato do projeto, os caminhos corretos e o jeito de rodar comandos no WSL sem cair nas armadilhas do ambiente.",
      ],
    },
  },
  {
    title: { pt: "Decisão registrada, não lembrada", en: "Decisions written down, not remembered" },
    body: {
      pt: "Um arquivo de progresso separa o que eu decidi [E] do que deleguei [C]. Uma sessão nova retoma dali.",
      en: "A progress file separates what I decided [E] from what I delegated [C]. A new session picks up from there.",
    },
    excerpt: {
      label: { pt: "trecho de PROGRESS.md do Runify", en: "excerpt from Runify's PROGRESS.md" },
      lines: [
        "[E] Desconectar o Strava libera o atleta para outra conta.",
        "[E] Verificação: testes automatizados + passada manual minha.",
        "[C] Ficar no Minitest, não migrar pra RSpec: sem valor imediato.",
      ],
    },
  },
  {
    title: { pt: "Nada vai pra main sem passar pelo CI", en: "Nothing reaches main without CI" },
    body: {
      pt: "Cobertura mínima, análise de segurança e auditoria de dependências barram o merge. A revisão técnica do Runify, em 4 PRs:",
      en: "Minimum coverage, security analysis and dependency audits block the merge. Runify's technical review, in 4 PRs:",
    },
    links: [
      { label: "#77", href: "https://github.com/TiagosailE/Runify/pull/77" },
      { label: "#78", href: "https://github.com/TiagosailE/Runify/pull/78" },
      { label: "#79", href: "https://github.com/TiagosailE/Runify/pull/79" },
      { label: "#80", href: "https://github.com/TiagosailE/Runify/pull/80" },
    ],
  },
];
