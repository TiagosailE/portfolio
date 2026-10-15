"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { contact } from "@/content/profile";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

export function Hero() {
  const t = useTranslations("hero");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        SplitText.create(".hero-name", {
          type: "chars",
          mask: "chars",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.035 }),
        });
        gsap.from(".hero-rise", { y: 18, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.45 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-labelledby="hero-name" className="shell pb-6 pt-14 sm:pt-20 lg:pb-12 lg:pt-24">
      <p className="eyebrow hero-rise flex flex-wrap gap-x-4 gap-y-1" data-station>
        <span>{t("place")}</span>
        <span aria-hidden="true" className="text-rule">
          /
        </span>
        <span>{t("coords")}</span>
      </p>

      <h1
        id="hero-name"
        className="hero-name display mt-6 text-[clamp(2.75rem,11vw,4.5rem)] uppercase lg:text-[clamp(5rem,8.2vw,6.5rem)]"
      >
        <span className="block lg:inline">Tiago</span> <span className="block lg:inline">Santos</span>
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <p className="hero-rise display-tight text-[clamp(1.4rem,3vw,2rem)] text-river">{t("role")}</p>
        <div className="hero-rise">
          <p className="max-w-[46ch] text-[1.15rem] leading-relaxed">{t("lead")}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-2 font-medium">
              <span aria-hidden="true" className="size-2 rounded-full bg-ochre" />
              {t("status")}
            </span>
            <span className="text-stone">{t("statusDetail")}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-river"
            >
              {t("toProjects")}
            </a>
            <a
              href={contact.cv}
              download={contact.cvFile}
              hrefLang="pt-BR"
              className="rounded-full border border-ink/30 px-6 py-3 text-sm font-medium transition-colors hover:border-river hover:text-river"
            >
              {t("cv")} <span aria-hidden="true">↓</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full border border-ink/30 px-6 py-3 text-sm font-medium transition-colors hover:border-river hover:text-river"
            >
              {t("email")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
