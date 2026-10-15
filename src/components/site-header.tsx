"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams<{ slug?: string }>();
  const other = locale === "pt" ? "en" : "pt";
  const target = params.slug
    ? ({ pathname: "/projetos/[slug]", params: { slug: params.slug } } as const)
    : ({ pathname: "/" } as const);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <Link href="/" className="display-tight text-[1.05rem] tracking-tight">
          Tiago Santos
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-5 text-sm sm:gap-7">
          <Link href={{ pathname: "/", hash: "projetos" }} className="hidden hover:text-river sm:inline">
            {t("projects")}
          </Link>
          <Link href={{ pathname: "/", hash: "sobre" }} className="hidden hover:text-river sm:inline">
            {t("about")}
          </Link>
          <Link href={{ pathname: "/", hash: "contato" }} className="hover:text-river">
            {t("contact")}
          </Link>
          <Link
            href={pathname === "/" ? { pathname: "/" } : target}
            locale={other}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            aria-label={t("switchTo")}
            className="mono rounded-full border border-ink/25 px-3 py-1 text-[0.7rem] font-medium transition-colors hover:border-river hover:text-river"
          >
            {t("switchShort")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
