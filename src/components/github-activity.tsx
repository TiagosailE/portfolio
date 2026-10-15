import { getLocale, getTranslations } from "next-intl/server";
import { contact } from "@/content/profile";
import { getGithubActivity } from "@/lib/github";
import { SectionHeading } from "./section-heading";

export async function GithubActivity() {
  const [t, locale, activity] = await Promise.all([getTranslations("github"), getLocale(), getGithubActivity()]);
  const number = new Intl.NumberFormat(locale === "pt" ? "pt-BR" : "en-US");
  const date = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", { day: "2-digit", month: "short" });

  return (
    <section aria-labelledby="github-titulo" className="shell py-20 lg:py-28">
      <SectionHeading id="github-titulo" eyebrow={t("eyebrow")} title={t("title")} />

      {activity ? (
        <>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {[
              { value: number.format(activity.commitsLastYear), label: t("commits") },
              { value: number.format(activity.mergedPulls), label: t("prs") },
              { value: number.format(activity.publicRepos), label: t("repos") },
              { value: String(activity.memberSince), label: t("since") },
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

          <h3 className="eyebrow mt-16">{t("recent")}</h3>
          <ul className="mt-4 border-b border-rule">
            {activity.recentPulls.map((pull) => (
              <li key={pull.url} className="border-t border-rule">
                <a
                  href={pull.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-1 py-4 sm:grid-cols-[6rem_14rem_1fr] sm:gap-6"
                >
                  <span className="mono text-[0.7rem] leading-6 text-stone">
                    {pull.mergedAt ? date.format(new Date(pull.mergedAt)) : ""}
                  </span>
                  <span className="mono truncate text-[0.7rem] leading-6 text-stone">{pull.repo}</span>
                  <span className="group-hover:text-river">{pull.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
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
