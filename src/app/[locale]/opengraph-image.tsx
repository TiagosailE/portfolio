import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tiago Santos";

const STACK = "React · TypeScript · Ruby on Rails";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// A API do Google Fonts devolve um TTF estático só com os caracteres pedidos, que é o formato que o ImageResponse aceita.
async function loadFont(family: string, text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
    ).then((response) => response.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const eyebrow = `${t("place").toUpperCase()}  /  ${t("coords").replaceAll("′", "'")}`;

  const [body, display] = await Promise.all([
    loadFont("Instrument+Sans:wght@500", `${eyebrow}${STACK}`),
    loadFont("Archivo:wdth,wght@125,800", `TIAGOSANTOS${t("role")}`),
  ]);

  const fonts = [
    body && { name: "Instrument Sans", data: body, weight: 500 as const, style: "normal" as const },
    display && { name: "Archivo", data: display, weight: 800 as const, style: "normal" as const },
  ].filter((font) => font !== null);
  const displayFamily = display ? "Archivo" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f2f4f3",
          color: "#132422",
          padding: "72px 80px",
          position: "relative",
          fontFamily: body ? "Instrument Sans" : undefined,
        }}
      >
        <svg width="60" height="630" viewBox="0 0 60 630" style={{ position: "absolute", left: 40, top: 0 }}>
          <path
            d="M30 0 C 46 120, 14 200, 30 315 C 46 430, 14 510, 30 630"
            fill="none"
            stroke="#0e6a73"
            strokeWidth="4"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 60, justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 2, color: "#56635f" }}>{eyebrow}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 0.95,
              fontFamily: displayFamily,
            }}
          >
            <span>TIAGO</span>
            <span>SANTOS</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", color: "#0e6a73" }}>
            <span style={{ fontFamily: displayFamily, fontWeight: 800, fontSize: 34 }}>{t("role")}</span>
            <span style={{ color: "#56635f", fontSize: 30, marginLeft: 24 }}>{STACK}</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
