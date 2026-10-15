import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { featured, more } from "@/content/projects";
import { pick, type Project, type ProjectLink } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { PhoneStack } from "./phone-stack";

export function Projects() {
  const t = useTranslations("projects");
  const withCase = featured.filter((project) => project.caseStudy);
  const compact = featured.filter((project) => !project.caseStudy);

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="shell py-20 lg:py-28">
      <SectionHeading id="projetos-titulo" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <div className="mt-16 space-y-24 lg:space-y-32">
        {withCase.map((project, index) => (
          <FeaturedProject key={project.slug} project={project} flip={index % 2 === 1} />
        ))}
      </div>

      <ul className="mt-24 border-b border-rule">
        {compact.map((project) => (
          <CompactProject key={project.slug} project={project} />
        ))}
      </ul>

      <h3 className="eyebrow mt-20">{t("more")}</h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {more.map((project) => (
          <SmallProject key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <h3 className="display-tight text-[clamp(2.2rem,4.5vw,3.4rem)]">{project.name}</h3>
        <p className="mt-4 text-[1.1rem]">{pick(project.tagline, locale)}</p>
        <p className="mono mt-4 text-[0.72rem] text-stone">{pick(project.role, locale)}</p>
        <Proof label={t("proofLabel")} text={pick(project.proof, locale)} />
        <StackList items={project.stack} />
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={{ pathname: "/projetos/[slug]", params: { slug: project.slug } }}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-river"
          >
            {t("caseStudy")}
          </Link>
          <ExternalLinks links={project.links} locale={locale} />
        </div>
      </div>

      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        {project.coverKind === "phone" && project.phones ? (
          <PhoneStack shots={project.phones} locale={locale} />
        ) : (
          project.cover && (
            <Image
              src={project.cover.src}
              alt={pick(project.cover.alt, locale)}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(min-width: 64rem) 60vw, 100vw"
              className="w-full rounded-lg shadow-[0_30px_60px_-30px_rgb(19_36_34/0.45)] ring-1 ring-ink/10"
            />
          )
        )}
      </Reveal>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <li className="grid gap-6 border-t border-rule py-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <h3 className="display-tight text-[clamp(1.6rem,3vw,2.2rem)]">{project.name}</h3>
        {project.status && (
          <p className="mono mt-3 inline-block rounded-full border border-ochre/60 px-3 py-1 text-[0.68rem] text-ink">
            {pick(project.status, locale)}
          </p>
        )}
        <p className="mono mt-3 text-[0.72rem] text-stone">{pick(project.role, locale)}</p>
      </div>
      <div className="lg:col-span-8">
        <p className="text-[1.1rem]">{pick(project.tagline, locale)}</p>
        <Proof label={t("proofLabel")} text={pick(project.proof, locale)} />
        <StackList items={project.stack} />
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <ExternalLinks links={project.links} locale={locale} />
        </div>
      </div>
    </li>
  );
}

function SmallProject({ project }: { project: Project }) {
  const locale = useLocale() as Locale;

  return (
    <li className="flex flex-col rounded-lg bg-surface p-6 sm:p-8">
      {project.badge && (
        <p className="mono mb-4 self-start rounded-full bg-ochre/15 px-3 py-1 text-[0.68rem] text-ink">
          {pick(project.badge, locale)}
        </p>
      )}
      <h4 className="display-tight text-[1.6rem]">{project.name}</h4>
      <p className="mt-3">{pick(project.tagline, locale)}</p>
      <p className="mt-3 text-stone">{pick(project.proof, locale)}</p>
      <p className="mono mt-4 text-[0.7rem] text-stone">
        {pick(project.role, locale)} · {project.stack.join(" · ")}
      </p>
      <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
        <ExternalLinks links={project.links} locale={locale} />
      </div>
    </li>
  );
}

function Proof({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-6 border-l-2 border-river pl-4">
      <p className="eyebrow text-river">{label}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
}

function StackList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="mono rounded-full border border-rule px-3 py-1 text-[0.68rem] text-stone">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLinks({ links, locale }: { links: ProjectLink[]; locale: Locale }) {
  return links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex flex-wrap items-baseline gap-x-2 text-sm font-medium"
    >
      <span className="link-underline group-hover:text-river">
        {pick(link.label, locale)}
        <span aria-hidden="true"> ↗</span>
      </span>
      {link.note && <span className="text-xs font-normal text-stone">({pick(link.note, locale)})</span>}
    </a>
  ));
}
