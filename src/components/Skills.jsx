import {
  SiReact, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiRedux, SiGit, SiDocker, SiPytest, SiPostman, SiVercel, SiCplusplus, SiMysql,
} from "react-icons/si";
import { skillGroups } from "../data";
import { Reveal, Section, SectionHeading, SpotCard } from "./ui";

const marquee = [
  [SiReact, "React", "#61dafb"],
  [SiJavascript, "JavaScript", "#f7df1e"],
  [SiPython, "Python", "#4b8bbe"],
  [SiNodedotjs, "Node.js", "#5fa04e"],
  [SiExpress, "Express", "#e6edf6"],
  [SiMongodb, "MongoDB", "#47a248"],
  [SiTailwindcss, "Tailwind CSS", "#38bdf8"],
  [SiTypescript, "TypeScript", "#3178c6"],
  [SiRedux, "Redux", "#a37fe0"],
  [SiGit, "Git", "#f05032"],
  [SiDocker, "Docker", "#2496ed"],
  [SiPytest, "pytest", "#62b5e5"],
  [SiPostman, "Postman", "#ff6c37"],
  [SiCplusplus, "C++", "#659ad2"],
  [SiMysql, "SQL", "#4479a1"],
  [SiVercel, "Vercel", "#e6edf6"],
];

const Skills = () => (
  <Section id="skills">
    <SectionHeading index="05" kicker="skills" title="What I work with" />

    <Reveal className="marquee -mx-5 mb-12 overflow-hidden py-2">
      <div className="marquee-track flex w-max gap-4">
        {[...marquee, ...marquee].map(([Icon, name, hex], i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-surface/60 px-4 py-2.5 text-sm text-slate-300"
            aria-hidden={i >= marquee.length}
          >
            <Icon style={{ color: hex }} className="h-4 w-4" aria-hidden />
            {name}
          </span>
        ))}
      </div>
    </Reveal>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((g, i) => {
        const ai = g.title === "AI evaluation";
        const wide = ai ? "md:col-span-2" : g.title === "Core CS" ? "lg:col-span-2" : "";
        return (
          <Reveal key={g.title} delay={(i % 3) * 0.08} className={wide}>
            <SpotCard
              className={`h-full rounded-2xl border p-6 ${ai ? "border-accent/30 bg-accent/[0.04]" : "border-line bg-surface/60"}`}
            >
              <h3 className="font-mono text-sm text-accent">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </SpotCard>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
