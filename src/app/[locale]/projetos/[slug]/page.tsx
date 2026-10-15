import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { caseStudies, findCaseStudy } from "@/content/projects";
import { pick } from "@/content/types";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname, Link } from "@/i18n/navigation";
import { ExternalLinks, StatusTag } from "@/components/projects";
import { PhoneStack } from "@/components/phone-stack";
import { Reveal } from "@/components/reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => caseStudies.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/projetos/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findCaseStudy(slug);
  if (!project) return {};
  const lang = locale as Locale;
  const title = `${project.name} · Tiago Santos`;
  const description = pick(project.tagline, lang);

  return {
    title,
    description,
    // Sem isso o openGraph do layout é herdado inteiro e o link compartilhado mostra o título da home.
    // Ao sobrescrever, a imagem do layout deixa de vir junto, então ela é apontada de novo aqui.
    openGraph: {
      title,
      description,
      type: "article",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      images: [{ url: `/${lang}/opengraph-image`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: getPathname({ locale: lang, href: { pathname: "/projetos/[slug]", params: { slug } } }),
      languages: {
        "pt-BR": getPathname({ locale: "pt", href: { pathname: "/projetos/[slug]", params: { slug } } }),
        en: getPathname({ locale: "en", href: { pathname: "/projetos/[slug]", params: { slug } } }),
      },
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/[locale]/projetos/[slug]">) {
  const { locale, slug } = await params;
  const lang = locale as Locale;
  setRequestLocale(lang);
  const project = findCaseStudy(slug);
  if (!project?.caseStudy) notFound();

  const t = await getTranslations("case");
  const study = project.caseStudy;
  const position = caseStudies.indexOf(project);
  const next = caseStudies[(position + 1) % caseStudies.length];

  return (
    <article className="pb-24">
      <header className="shell pt-12 sm:pt-16">
        <Link href={{ pathname: "/", hash: "projetos" }} className="mono text-[0.72rem] text-stone hover:text-river">
          ← {t("back")}
        </Link>
        <h1 className="display mt-8 text-[clamp(3rem,11vw,8rem)]" data-station>
          {project.name}
        </h1>
        {project.status && <StatusTag text={pick(project.status, lang)} />}
        <p className="mt-6 max-w-[52ch] text-[clamp(1.15rem,2vw,1.4rem)] leading-snug">
          {pick(project.tagline, lang)}
        </p>

        <dl className="mt-10 grid gap-6 border-y border-rule py-6 md:grid-cols-3">
          <div>
            <dt className="eyebrow">{t("role")}</dt>
            <dd className="mt-2">{pick(project.role, lang)}</dd>
          </div>
          <div>
            <dt className="eyebrow">{t("stack")}</dt>
            <dd className="mt-2">{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt className="eyebrow">{t("links")}</dt>
            <dd className="mt-2 flex flex-col items-start gap-2">
              <ExternalLinks links={project.links} locale={lang} />
            </dd>
          </div>
        </dl>
      </header>

      <Reveal className="shell mt-12">
        {project.coverKind === "phone" && project.phones ? (
          <div className="mx-auto max-w-3xl">
            <PhoneStack shots={project.phones} locale={lang} />
          </div>
        ) : (
          project.cover && (
            <Image
              src={project.cover.src}
              alt={pick(project.cover.alt, lang)}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(min-width: 76rem) 68rem, 100vw"
              priority
              className="w-full rounded-lg ring-1 ring-ink/10"
            />
          )
        )}
      </Reveal>

      <div className="shell mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <section aria-labelledby="contexto" className="lg:col-span-7">
          <h2 id="contexto" className="eyebrow" data-station>
            {t("context")}
          </h2>
          <p className="mt-5 text-[1.15rem] leading-relaxed">{pick(study.context, lang)}</p>
        </section>

        <section aria-labelledby="numeros" className="lg:col-span-4 lg:col-start-9">
          <h2 id="numeros" className="eyebrow">
            {t("figures")}
          </h2>
          <dl className="mt-5 space-y-5">
            {study.figures.map((figure) => (
              <div key={figure.value} className="border-t-2 border-ink pt-3">
                <dt className="sr-only">{pick(figure.label, lang)}</dt>
                <dd className="display text-[2.6rem]">{figure.value}</dd>
                <dd aria-hidden="true" className="text-sm text-stone">
                  {pick(figure.label, lang)}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section aria-labelledby="fiz" className="shell mt-20">
        <h2 id="fiz" className="eyebrow" data-station>
          {t("contributions")}
        </h2>
        <ul className="mt-6 grid gap-x-12 border-b border-rule md:grid-cols-2">
          {study.contributions.map((item) => (
            <li key={item.pt} className="border-t border-rule py-4">
              {pick(item, lang)}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="decisoes" className="shell mt-20">
        <h2 id="decisoes" className="eyebrow" data-station>
          {t("decisions")}
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-x-12">
          {study.decisions.map((decision) => (
            <div key={decision.title.pt} className="border-l-2 border-river pl-5">
              <h3 className="display-tight text-[1.45rem]">{pick(decision.title, lang)}</h3>
              <p className="mt-3 text-stone">{pick(decision.body, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="telas" className="shell mt-20">
        <h2 id="telas" className="eyebrow" data-station>
          {t("gallery")}
        </h2>
        <div
          className={`mt-8 grid gap-6 ${
            study.galleryKind === "phone" ? "grid-cols-2 sm:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {study.gallery.map((shot) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={pick(shot.alt, lang)}
              width={shot.width}
              height={shot.height}
              sizes={study.galleryKind === "phone" ? "(min-width: 40rem) 30vw, 50vw" : "(min-width: 48rem) 45vw, 100vw"}
              className={`w-full ring-1 ring-ink/10 ${study.galleryKind === "phone" ? "rounded-[1.4rem]" : "rounded-lg"}`}
            />
          ))}
        </div>
      </section>

      {next && next.slug !== project.slug && (
        <nav aria-label={t("next")} className="shell mt-24">
          <Link
            href={{ pathname: "/projetos/[slug]", params: { slug: next.slug } }}
            className="group block border-t-2 border-ink pt-6"
          >
            <span className="eyebrow">{t("next")}</span>
            <span className="display mt-3 block text-[clamp(2.4rem,7vw,5rem)] transition-colors group-hover:text-river">
              {next.name} →
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
