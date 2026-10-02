import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { Section, SectionHeading, SpotCard, Tag, Reveal } from "./ui";

const categories = ["All", "Full-stack", "Frontend", "Games", "Python"];

// MediaPipe jaise hand points, Hand Gesture project ke cover ke liye
const hand = {
  wrist: [100, 182],
  fingers: [
    [[74, 166], [54, 146], [41, 126], [31, 108]],
    [[78, 122], [72, 92], [68, 70], [65, 50]],
    [[99, 116], [99, 84], [99, 60], [99, 38]],
    [[119, 121], [123, 92], [126, 70], [128, 53]],
    [[136, 131], [146, 110], [152, 94], [157, 79]],
  ],
};

function GestureCover() {
  const [wx, wy] = hand.wrist;
  const bases = hand.fingers.slice(1).map((f) => f[0]);
  return (
    <div className="relative flex h-full items-center justify-center bg-linear-to-br from-[#0b1a24] to-[#081019]">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
      <svg viewBox="0 0 200 200" className="relative h-[85%]" aria-hidden>
        <g stroke="rgb(52 211 153 / 0.55)" strokeWidth="2" fill="none" strokeLinecap="round">
          {hand.fingers.map((f, i) => (
            <polyline key={i} points={[[wx, wy], ...f].map((p) => p.join(",")).join(" ")} />
          ))}
          <polyline points={bases.map((p) => p.join(",")).join(" ")} />
        </g>
        {[hand.wrist, ...hand.fingers.flat()].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#22d3ee" stroke="#070b14" strokeWidth="1.5" />
        ))}
      </svg>
      <span className="absolute bottom-3 right-4 font-mono text-[11px] text-accent/80">MediaPipe + TensorFlow</span>
    </div>
  );
}

function RunnerCover() {
  return (
    <div className="relative h-full overflow-hidden bg-linear-to-b from-[#101a33] to-[#0a1222]">
      <div className="absolute inset-x-0 top-4 text-center font-mono text-[11px] tracking-widest text-muted">TARGET: ATIF</div>
      <div className="absolute inset-x-0 top-10 flex justify-center gap-3 font-display text-3xl font-bold">
        <span className="text-accent">A</span>
        <span className="text-accent">T</span>
        <span className="text-slate-600">_</span>
        <span className="text-slate-600">_</span>
      </div>
      <motion.span
        className="absolute bottom-[34%] flex h-9 w-9 items-center justify-center rounded-lg border border-accent-2/50 bg-accent-2/10 font-display font-bold text-accent-2"
        initial={{ left: "100%" }}
        animate={{ left: "-15%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      >
        I
      </motion.span>
      <span className="absolute bottom-[24%] left-[18%] h-8 w-6 rounded-md bg-accent shadow-[0_0_20px_rgb(52_211_153/0.6)]" />
      <div className="absolute inset-x-0 bottom-[24%] h-px bg-line" />
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[repeating-linear-gradient(90deg,rgb(148_163_184/0.08)_0_2px,transparent_2px_28px)]" />
    </div>
  );
}

const covers = { gesture: GestureCover, runner: RunnerCover };

function ProjectCard({ p }) {
  const Cover = covers[p.cover];
  return (
    <SpotCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/70">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          Cover && <Cover />
        )}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full border border-white/10 bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-fg backdrop-blur">
            {p.category}
          </span>
          {p.note && (
            <span className="rounded-full border border-accent/30 bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur">
              {p.note}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
        {p.points.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {pt}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-5 pt-5 text-sm font-medium">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
              Live demo <FiArrowUpRight aria-hidden />
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-fg">
              <FaGithub aria-hidden /> Code
            </a>
          )}
          {!p.live && !p.code && <span className="text-muted">Code not public</span>}
        </div>
      </div>
    </SpotCard>
  );
}

const Projects = () => {
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        kicker="projects"
        title="Things I've built"
        sub="Live demos where I have them, and the code on GitHub."
      />

      <Reveal className="mb-8 flex flex-wrap gap-2" y={12}>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`relative isolate rounded-full border px-4 py-1.5 text-sm transition-colors ${
              cat === c ? "border-accent/40 text-bg" : "border-line text-muted hover:text-fg"
            }`}
          >
            {cat === c && (
              <motion.span layoutId="proj-pill" className="absolute inset-0 -z-10 rounded-full bg-accent" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
            )}
            {c}
          </button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard p={p} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
