import Image from "next/image";
import { pick, type Shot } from "@/content/types";
import type { Locale } from "@/i18n/routing";

const offsets = ["translate-y-10", "z-10", "translate-y-16"];

export function PhoneStack({ shots, locale }: { shots: Shot[]; locale: Locale }) {
  return (
    <div className="grid grid-cols-3 items-start gap-3 pb-16 sm:gap-5">
      {shots.slice(0, 3).map((shot, index) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={pick(shot.alt, locale)}
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 64rem) 20vw, 33vw"
          className={`w-full rounded-[1.4rem] shadow-[0_30px_50px_-28px_rgb(19_36_34/0.5)] ring-1 ring-ink/10 ${offsets[index]}`}
        />
      ))}
    </div>
  );
}
