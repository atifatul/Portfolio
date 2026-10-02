import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { experience, education } from "../data";
import { Reveal, Section, SectionHeading, SpotCard, Tag } from "./ui";

function Dot({ current }) {
  return (
    <span className="absolute left-[-32.5px] top-7 flex h-3 w-3 sm:left-[-40.5px]" aria-hidden>
      {current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />}
      <span className={`relative inline-flex h-3 w-3 rounded-full border-2 ${current ? "border-accent bg-accent" : "border-accent bg-bg"}`} />
    </span>
  );
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience">
      <SectionHeading index="03" kicker="experience" title="Where I've worked" />

      <div ref={ref} className="relative pl-8 sm:pl-12">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line sm:left-[13px]" aria-hidden />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-linear-to-b from-accent to-accent-2 sm:left-[13px]"
          aria-hidden
        />

        {experience.map((job) => (
          <Reveal key={job.org} className="relative mb-6">
            <Dot current={job.current} />
            <SpotCard className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  <p className="mt-0.5 font-medium text-accent">{job.org}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-sm text-fg">{job.dates}</p>
                  <p className="text-sm text-muted">{job.meta}</p>
                </div>
              </div>

              {job.badge && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <FiAward aria-hidden /> {job.badge}
                </p>
              )}

              <ul className="mt-5 space-y-2.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </SpotCard>
          </Reveal>
        ))}

        <Reveal className="relative">
          <Dot />
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-line px-6 py-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-accent-2">
                <FiBookOpen aria-hidden />
              </span>
              <div>
                <p className="font-display font-semibold">{education.degree}</p>
                <p className="text-sm text-muted">{education.school}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-mono text-sm">{education.dates}</p>
              <p className="text-sm text-muted">{education.grade}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Experience;
