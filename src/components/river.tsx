"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

const WIDTH = 44;
const CENTER = WIDTH / 2;

type Geometry = { height: number; stations: number[] };

// Curvas cúbicas que passam exatamente pelo centro em cada estação e serpenteiam entre elas, como o rio entre as seções.
function riverPath({ height, stations }: Geometry) {
  const points = [0, ...stations.filter((y) => y > 40 && y < height - 40), height];
  let d = `M ${CENTER} 0`;
  points.slice(1).forEach((y, index) => {
    const previous = points[index];
    const span = y - previous;
    const swing = index % 2 === 0 ? 1 : -1;
    const amplitude = Math.min(16, 6 + span / 120);
    d += ` C ${CENTER + swing * amplitude} ${previous + span * 0.35}, ${CENTER - swing * amplitude} ${previous + span * 0.65}, ${CENTER} ${y}`;
  });
  return d;
}

export function River() {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  useEffect(() => {
    const container = root.current?.parentElement;
    if (!container) return;

    const measure = () => {
      const top = container.getBoundingClientRect().top + window.scrollY;
      const stations = Array.from(container.querySelectorAll<HTMLElement>("[data-station]")).map(
        (element) => Math.round(element.getBoundingClientRect().top + window.scrollY - top + 6),
      );
      setGeometry((current) => {
        // offsetHeight ignora o próprio SVG (absoluto); scrollHeight o incluiria e a altura nunca diminuiria ao trocar de página.
        const next = { height: container.offsetHeight, stations };
        const same =
          current &&
          current.height === next.height &&
          current.stations.join() === next.stations.join();
        return same ? current : next;
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [pathname]);

  useGSAP(
    () => {
      if (!geometry || !root.current) return;
      const container = root.current.parentElement;
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 64rem)`, () => {
        gsap.fromTo(
          ".river-water",
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            ease: "none",
            scrollTrigger: { trigger: container, start: "top 55%", end: "bottom bottom", scrub: 0.5 },
          },
        );
        gsap.utils.toArray<SVGCircleElement>(".river-station").forEach((dot) => {
          gsap.fromTo(
            dot,
            { attr: { r: 3 }, fill: "var(--paper)" },
            {
              attr: { r: 5 },
              fill: "var(--river)",
              duration: 0.4,
              scrollTrigger: { trigger: dot, start: "top 55%", toggleActions: "play none none reverse" },
            },
          );
        });
      });
    },
    { dependencies: [geometry], scope: root, revertOnUpdate: true },
  );

  return (
    <div ref={root} aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <div className="shell relative h-full">
        {geometry && (
          <svg
            className="absolute left-8 top-0"
            width={WIDTH}
            height={geometry.height}
            viewBox={`0 0 ${WIDTH} ${geometry.height}`}
          >
            <path d={riverPath(geometry)} fill="none" stroke="var(--rule)" strokeWidth={2} />
            <path
              className="river-water"
              d={riverPath(geometry)}
              fill="none"
              stroke="var(--river)"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            {geometry.stations.map((y) => (
              <circle
                key={y}
                className="river-station"
                cx={CENTER}
                cy={y}
                r={5}
                fill="var(--river)"
                stroke="var(--river)"
                strokeWidth={2}
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}
