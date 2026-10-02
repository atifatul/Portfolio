import { FiCheck, FiCode, FiCpu } from "react-icons/fi";
import { whatIDo } from "../data";
import { Reveal, Section, SectionHeading, SpotCard } from "./ui";

const icons = { ai: FiCpu, dev: FiCode };
const marks = { ai: "✓ ✗", dev: "</>" };

const WhatIDo = () => (
  <Section id="what-i-do">
    <SectionHeading
      index="02"
      kicker="what I do"
      title="Two kinds of work"
      sub="Most of my time now goes into AI training, and I still build web apps and games."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {whatIDo.map((card, i) => {
        const Icon = icons[card.key];
        return (
          <Reveal key={card.key} delay={i * 0.1}>
            <SpotCard className="h-full overflow-hidden rounded-3xl border border-line bg-surface/70 p-7 sm:p-9">
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-8xl font-bold text-white/[0.03]" aria-hidden>
                {marks[card.key]}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-muted">{card.blurb}</p>
              <ul className="mt-6 space-y-3.5">
                {card.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                    <FiCheck className="mt-1 shrink-0 text-accent" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default WhatIDo;
