import { Fragment } from "react";
import { useLocale, useTranslations } from "next-intl";
import { stack } from "@/content/profile";
import { pick } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section-heading";

export function Stack() {
  const t = useTranslations("stack");
  const locale = useLocale() as Locale;

  return (
    <section aria-labelledby="stack-titulo" className="shell py-20 lg:py-28">
      <SectionHeading id="stack-titulo" eyebrow={t("eyebrow")} title={t("title")} />
      <dl className="mt-12 border-b border-rule">
        {stack.map((group, index) => (
          <div key={group.title.pt} className="grid gap-3 border-t border-rule py-6 md:grid-cols-12 md:gap-8">
            <dt className="eyebrow pt-1.5 md:col-span-3">{pick(group.title, locale)}</dt>
            <dd
              className={`md:col-span-9 ${
                index === 0 ? "display-tight text-[clamp(1.35rem,2.6vw,1.9rem)]" : "text-[1.15rem] text-ink/85"
              }`}
            >
              {group.items.map((item, itemIndex) => (
                <Fragment key={item}>
                  <span className="whitespace-nowrap">
                    {item}
                    {itemIndex < group.items.length - 1 && (
                      <span aria-hidden="true" className="pl-2 text-rule">
                        /
                      </span>
                    )}
                  </span>{" "}
                </Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
