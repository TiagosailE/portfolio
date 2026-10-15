import { useLocale, useTranslations } from "next-intl";
import { practices } from "@/content/profile";
import { pick } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section-heading";

export function Practice() {
  const t = useTranslations("practice");
  const locale = useLocale() as Locale;

  return (
    <section aria-labelledby="pratica-titulo" className="shell py-20 lg:py-28">
      <SectionHeading id="pratica-titulo" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {practices.map((practice) => (
          <li key={practice.title.pt} className="flex min-w-0 flex-col">
            <h3 className="display-tight text-[1.35rem]">{pick(practice.title, locale)}</h3>
            <p className="mt-3 text-stone">{pick(practice.body, locale)}</p>
            {practice.excerpt && (
              <figure className="mt-6 overflow-hidden rounded-lg bg-ink text-paper">
                <figcaption className="mono border-b border-paper/10 px-4 py-2.5 text-[0.65rem] text-paper/60">
                  {pick(practice.excerpt.label, locale)}
                </figcaption>
                <pre className="mono whitespace-pre-wrap break-words px-4 py-4 text-[0.72rem] leading-relaxed">
                  {practice.excerpt.lines.map((line) => (
                    <span key={line} className="mb-1 block pl-[4ch] -indent-[4ch]">
                      <Highlight line={line} />
                    </span>
                  ))}
                </pre>
              </figure>
            )}
            {practice.links && (
              <p className="mt-6 flex flex-wrap gap-2">
                {practice.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mono rounded-full bg-ink px-3.5 py-1.5 text-[0.72rem] text-paper transition-colors hover:bg-river"
                  >
                    Runify {link.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Highlight({ line }: { line: string }) {
  const tag = line.match(/^\[(E|C)\]/);
  if (tag) {
    return (
      <>
        <span className={tag[1] === "E" ? "text-ochre" : "text-[#7fc4cb]"}>{tag[0]}</span>
        {line.slice(tag[0].length)}
      </>
    );
  }
  const key = line.match(/^(\w+):/);
  if (key) {
    return (
      <>
        <span className="text-[#7fc4cb]">{key[0]}</span>
        {line.slice(key[0].length)}
      </>
    );
  }
  return <>{line}</>;
}
