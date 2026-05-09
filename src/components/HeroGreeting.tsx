"use client";

import { useEffect, useState } from "react";

type Period = "matin" | "apresmidi" | "soir" | "nuit";

const greetings: Record<Period, { line1: string; accent: string; line2: string }> = {
  matin: {
    line1: "Bonne matinée —",
    accent: "café",
    line2: "en main, code en tête.",
  },
  apresmidi: {
    line1: "Bel après-midi —",
    accent: "commits",
    line2: "poussés, bugs chassés.",
  },
  soir: {
    line1: "Bonne soirée —",
    accent: "dernière",
    line2: "PR avant de dormir.",
  },
  nuit: {
    line1: "Encore debout ?",
    accent: "nuit blanche",
    line2: "ou serveur en prod qui plante.",
  },
};

function getPeriod(hour: number): Period {
  if (hour >= 6 && hour < 12) return "matin";
  if (hour >= 12 && hour < 18) return "apresmidi";
  if (hour >= 18 && hour < 22) return "soir";
  return "nuit";
}

export function HeroGreeting() {
  const [period, setPeriod] = useState<Period | null>(null);

  useEffect(() => {
    setPeriod(getPeriod(new Date().getHours()));
  }, []);

  // SSR fallback invisible — évite le flash de contenu
  if (!period) {
    return (
      <h1
        className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 opacity-0 select-none"
        aria-hidden="true"
        style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
      >
        &nbsp;
      </h1>
    );
  }

  const { line1, accent, line2 } = greetings[period];

  return (
    <h1
      className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
    >
      {line1}{" "}
      <span className="text-accent relative inline-block">
        {accent}
        <span
          className="absolute bottom-1 left-0 w-full h-[4px] bg-accent"
          aria-hidden="true"
        />
      </span>{" "}
      <br />
      {line2}
    </h1>
  );
}
