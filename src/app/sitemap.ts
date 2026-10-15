import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { pathname: "/" } as const,
    ...caseStudies.map((project) => ({ pathname: "/projetos/[slug]", params: { slug: project.slug } }) as const),
  ];

  return pages.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}${getPathname({ locale, href })}`,
      lastModified: new Date(),
    })),
  );
}
