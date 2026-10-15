import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Practice } from "@/components/practice";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { GithubActivity } from "@/components/github-activity";
import { Contact } from "@/components/contact";

export const revalidate = 21600;

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <Projects />
      <Practice />
      <About />
      <Stack />
      <GithubActivity />
      <Contact />
    </>
  );
}
