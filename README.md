# Portfólio · Tiago Santos

Site pessoal com meus projetos, trajetória e contato. Em português, com versão em inglês.

## Stack

- Next.js 16 (App Router) e TypeScript
- Tailwind CSS 4
- GSAP (ScrollTrigger, DrawSVG, SplitText) para as animações
- next-intl para as rotas em português (`/`) e inglês (`/en`)

As páginas são geradas de forma estática. A seção do GitHub busca os números na API pública e se atualiza a cada 6 horas, sem novo deploy.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em <http://localhost:3000>.

Variáveis opcionais:

| Variável | Uso |
|---|---|
| `GITHUB_TOKEN` | Token somente leitura para a API do GitHub. Sem ele, a API pública funciona com limite menor de requisições. |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site, usada no sitemap e nas meta tags. |

## Estrutura

```
src/
  app/[locale]/         home e páginas de estudo de caso
  components/           seções da página
  content/              projetos, trajetória e stack (texto em pt e en)
  messages/             textos da interface em pt e en
  lib/github.ts         números e PRs recentes do GitHub
public/projects/        capturas de tela dos projetos
```

Para adicionar um projeto, basta incluir uma entrada em `src/content/projects.ts`. Projetos com `caseStudy` ganham página própria.

## Qualidade

```bash
npm run lint
npx tsc --noEmit
npm run build
```

O mesmo conjunto roda no GitHub Actions a cada pull request.
