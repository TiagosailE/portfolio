import { useTranslations } from "next-intl";
import { contact } from "@/content/profile";
import { CopyEmail } from "./copy-email";

export function Contact() {
  const t = useTranslations("contact");

  const channels = [
    { label: t("whatsapp"), detail: contact.whatsappDisplay, href: contact.whatsappHref },
    { label: t("linkedin"), detail: "tiago-santos-64a028320", href: contact.linkedin },
    { label: t("github"), detail: `@${contact.githubUser}`, href: contact.github },
  ];

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-ink text-paper">
      <div className="shell py-20 lg:py-28">
        <p className="eyebrow text-paper/60" data-station>
          {t("eyebrow")}
        </p>
        <h2 id="contato-titulo" className="display mt-4 text-[clamp(2.8rem,9vw,6.5rem)] uppercase">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[50ch] text-paper/75">{t("lead")}</p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="display-tight break-all text-[clamp(1.4rem,4.2vw,2.8rem)] underline decoration-paper/25 decoration-1 underline-offset-[0.2em] hover:decoration-paper"
          >
            {contact.email}
          </a>
          <CopyEmail email={contact.email} copyLabel={t("copy")} copiedLabel={t("copied")} />
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg bg-paper/15 sm:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.href} className="bg-ink">
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="group block p-6 transition-colors hover:bg-river-deep"
              >
                <span className="eyebrow text-paper/60">{channel.label}</span>
                <span className="mt-2 block text-[1.1rem]">
                  {channel.detail} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
