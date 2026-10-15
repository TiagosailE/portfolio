import type { Locale } from "@/i18n/routing";

export type Localized = Record<Locale, string>;

export function pick(text: Localized, locale: Locale) {
  return text[locale];
}

export type Shot = {
  src: string;
  alt: Localized;
  width: number;
  height: number;
};

export type ProjectLink = {
  label: Localized;
  href: string;
  note?: Localized;
};

export type Decision = {
  title: Localized;
  body: Localized;
};

export type Figure = {
  value: string;
  label: Localized;
};

export type CaseStudy = {
  context: Localized;
  contributions: Localized[];
  decisions: Decision[];
  figures: Figure[];
  gallery: Shot[];
  galleryKind: "wide" | "phone";
};

export type Project = {
  slug: string;
  name: string;
  status?: Localized;
  badge?: Localized;
  tagline: Localized;
  role: Localized;
  proof: Localized;
  stack: string[];
  links: ProjectLink[];
  cover?: Shot;
  coverKind?: "wide" | "phone";
  phones?: Shot[];
  caseStudy?: CaseStudy;
};
