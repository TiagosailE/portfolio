import { getLocale, getTranslations } from "next-intl/server";
import { contact } from "@/content/profile";
import { getGithubActivity } from "@/lib/github";
import { SectionHeading } from "./section-heading";

export async function GithubActivity() {
  const [t, locale, activity] = await Promise.all([getTranslations("github"), getLocale(), getGithubActivity()]);
  const number = new Intl.NumberFormat(locale === "pt" ? "pt-BR" : "en-US");

  return (
    <section aria-labelledby="github-titulo" className="shell py-20 lg:py-28">
      <SectionHeading id="github-titulo" eyebrow={t("eyebrow")} title={t("title")} />

      {activity ? (
        <dl className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-3">
          {[
            { value: number.format(activity.commitsLastYear), label: t("commits") },
            { value: number.format(activity.mergedPulls), label: t("prs") },
            { value: number.format(activity.publicRepos), label: t("repos") },
          ].map((stat) => (
            <div key={stat.label} className="border-t-2 border-ink pt-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="display text-[clamp(2.4rem,5vw,3.6rem)]">{stat.value}</dd>
              <dd aria-hidden="true" className="mt-2 text-sm text-stone">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-10 text-stone">{t("unavailable")}</p>
      )}

      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block text-sm font-medium link-underline hover:text-river"
      >
        {t("profile")} @{contact.githubUser} ↗
      </a>
    </section>
  );
}
