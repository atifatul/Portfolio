import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { Section, SectionHeading, SpotCard, Tag } from "./ui";

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
    <div className="relative flex h-full min-h-[240px] items-center justify-center">
      <svg viewBox="0 0 200 200" className="relative h-[78%] max-h-[340px] transition duration-700 group-hover:scale-105" aria-hidden>
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
      <span className="absolute bottom-4 right-5 font-mono text-[11px] text-accent/80">MediaPipe + TensorFlow</span>
    </div>
  );
}

function RunnerCover() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <div className="absolute inset-x-0 top-[14%] text-center font-mono text-xs tracking-[0.3em] text-muted">TARGET: ATIF</div>
      <div className="absolute inset-x-0 top-[22%] flex justify-center gap-4 font-display text-5xl font-bold">
        <span className="text-accent">A</span>
        <span className="text-accent">T</span>
        <span className="text-slate-600">_</span>
        <span className="text-slate-600">_</span>
      </div>
      <motion.span
        className="absolute bottom-[34%] flex h-11 w-11 items-center justify-center rounded-xl border border-accent-2/50 bg-accent-2/10 font-display text-lg font-bold text-accent-2"
        initial={{ left: "100%" }}
        animate={{ left: "-15%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      >
        I
      </motion.span>
      <motion.span
        className="absolute bottom-[24%] left-[18%] h-10 w-7 rounded-md bg-accent shadow-[0_0_24px_rgb(52_211_153/0.6)]"
        animate={{ y: [0, -46, 0] }}
        transition={{ duration: 1.75, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
      />
      <div className="absolute inset-x-0 bottom-[24%] h-px bg-line" />
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[repeating-linear-gradient(90deg,rgb(148_163_184/0.08)_0_2px,transparent_2px_28px)]" />
    </div>
  );
}

const covers = { gesture: GestureCover, runner: RunnerCover };
const tints = [
  "from-emerald-500/20",
  "from-cyan-500/20",
  "from-violet-500/20",
  "from-amber-500/15",
  "from-sky-500/20",
];

// screenshot ek browser window ke andar, hover pe seedha ho jata hai
function BrowserShot({ p }) {
  const host = p.live ? new URL(p.live).hostname : "";
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-bg shadow-2xl shadow-black/60 transition duration-700 [transform:perspective(1400px)_rotateY(-8deg)_rotateX(3deg)] group-hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)_scale(1.02)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-surface-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted">{host}</span>
      </div>
      <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="block w-full" />
    </div>
  );
}

function ProjectCard({ p, i, total }) {
  const Cover = covers[p.cover];
  return (
    <SpotCard className="group grid overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/50 lg:h-[540px] lg:grid-cols-[1.12fr_1fr]">
      <div
        className={`relative flex items-center justify-center overflow-hidden border-b border-line bg-linear-to-br ${tints[i % tints.length]} to-transparent p-6 sm:p-10 lg:border-b-0 lg:border-r`}
      >
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative w-full">{p.image ? <BrowserShot p={p} /> : Cover && <Cover />}</div>
      </div>

      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-sm text-muted">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-fg">{p.category}</span>
          {p.note && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">{p.note}</span>
          )}
        </div>
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.blurb}</p>
        {p.points.length > 0 && (
          <ul className="mt-4 space-y-2">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-300">
                <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {pt}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7 text-sm font-medium">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-bg transition hover:-translate-y-0.5"
            >
              Live demo <FiArrowUpRight aria-hidden />
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-line px-4 py-2.5 text-fg transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              <FaGithub aria-hidden /> Code
            </a>
          )}
          {!p.live && !p.code && <span className="text-muted">Code not public</span>}
        </div>
      </div>
    </SpotCard>
  );
}

function useIsDesktop() {
  const query = "(min-width: 1024px)";
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatch(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return match;
}

// desktop pe cards scroll ke saath ek ke upar ek stack hote hain, peeche wale thode chhote ho jaate hain
function StackItem({ p, i, total, progress, desktop }) {
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - 1 - i) * 0.05]);
  if (!desktop) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <ProjectCard p={p} i={i} total={total} />
      </motion.div>
    );
  }
  return (
    <div className="sticky top-0 flex h-[88vh] min-h-[640px] items-center">
      <motion.div style={{ scale, top: `${i * 28}px` }} className="relative w-full origin-top">
        <ProjectCard p={p} i={i} total={total} />
      </motion.div>
    </div>
  );
}

const Projects = () => {
  const ref = useRef(null);
  const desktop = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <Section id="projects">
      <SectionHeading index="04" kicker="projects" title="Things I've built" sub="Live demos where I have them, and the code on GitHub." />
      <div ref={ref} className="relative">
        {projects.map((p, i) => (
          <StackItem key={p.title} p={p} i={i} total={projects.length} progress={scrollYProgress} desktop={desktop} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
