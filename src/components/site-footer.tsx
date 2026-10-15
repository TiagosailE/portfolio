import { useTranslations } from "next-intl";
import { contact } from "@/content/profile";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-rule">
      <div className="shell flex flex-col gap-2 py-8 text-sm text-stone sm:flex-row sm:justify-between">
        <p>{t("built")}</p>
        <a href={contact.repo} className="link-underline" target="_blank" rel="noreferrer">
          {t("source")}
        </a>
      </div>
    </footer>
  );
}
