import { motion } from "motion/react";
import { FiMapPin } from "react-icons/fi";
import photo from "../assets/atif.webp";
import { about, profile } from "../data";
import { Reveal, Section, SectionHeading } from "./ui";

const About = () => (
  <Section id="about">
    <SectionHeading index="01" kicker="about" title="A bit about me" />

    <div className="grid items-start gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
      <Reveal className="mx-auto w-full max-w-[340px]">
        <motion.div whileHover={{ rotate: -1.5, y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-accent/30 to-accent-2/20 blur-2xl" aria-hidden />
          <div className="rounded-3xl bg-linear-to-br from-accent/70 via-line to-accent-2/70 p-px">
            <div className="overflow-hidden rounded-3xl bg-surface">
              <img src={photo} alt="MD Atif Reyyani" width="492" height="632" className="aspect-[4/5] w-full object-cover" />
              <div className="flex items-center justify-between border-t border-line px-5 py-4">
                <div>
                  <p className="font-display font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.role}</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <FiMapPin aria-hidden /> NCR
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>

      <div>
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className={`mb-5 text-lg leading-relaxed ${i === 0 ? "text-fg" : "text-muted"}`}>{p}</p>
          </Reveal>
        ))}

        <Reveal delay={0.2} className="mt-8 grid gap-3 sm:grid-cols-2">
          {about.facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-line bg-surface/60 px-5 py-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{f.label}</p>
              <p className="mt-1 text-fg">{f.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </Section>
);

export default About;
