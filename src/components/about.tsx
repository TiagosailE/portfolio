import { useLocale, useTranslations } from "next-intl";
import { about, timeline } from "@/content/profile";
import { pick } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section-heading";

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as Locale;

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="shell py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading id="sobre-titulo" eyebrow={t("eyebrow")} title={t("title")} />
          <div className="mt-8 space-y-5 text-[1.1rem] leading-relaxed">
            {about.map((paragraph) => (
              <p key={paragraph.pt}>{pick(paragraph, locale)}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <h3 className="eyebrow">{t("timeline")}</h3>
          <ol className="relative mt-6 border-l border-rule">
            {timeline.map((entry) => (
              <li key={entry.title.pt} className="relative pb-8 pl-7 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-[0.4rem] size-[9px] rounded-full ring-4 ring-paper ${
                    entry.kind === "award" ? "bg-ochre" : entry.kind === "study" ? "bg-river" : "bg-ink"
                  }`}
                />
                <p className="mono text-[0.7rem] text-stone">{pick(entry.when, locale)}</p>
                <p className="mt-1 font-semibold">
                  {pick(entry.title, locale)} <span className="font-normal text-stone">· {entry.place}</span>
                </p>
                <p className="mt-1 text-[0.95rem] text-stone">{pick(entry.detail, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
