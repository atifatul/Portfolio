import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { Reveal, Section, SectionHeading, SpotCard, Tag } from "./ui";

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
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-[80%] transition duration-700 group-hover:scale-110" aria-hidden>
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
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-[14%] text-center font-mono text-[11px] tracking-[0.3em] text-muted">TARGET: ATIF</div>
      <div className="absolute inset-x-0 top-[24%] flex justify-center gap-3 font-display text-4xl font-bold">
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
      <motion.span
        className="absolute bottom-[24%] left-[18%] h-8 w-6 rounded-md bg-accent shadow-[0_0_24px_rgb(52_211_153/0.6)]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 1.75, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
      />
      <div className="absolute inset-x-0 bottom-[24%] h-px bg-line" />
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[repeating-linear-gradient(90deg,rgb(148_163_184/0.08)_0_2px,transparent_2px_28px)]" />
    </div>
  );
}

const covers = { gesture: GestureCover, runner: RunnerCover };
// featured card ke screenshot ke aas-paas tairte chips
const chipSpots = ["left-5 top-6", "right-5 top-1/3", "bottom-6 left-1/4"];

const tints = ["from-emerald-500/20", "from-cyan-500/20", "from-violet-500/20", "from-amber-500/15", "from-sky-500/20"];

// screenshot ek browser window ke andar
function BrowserShot({ p }) {
  const host = p.live ? new URL(p.live).hostname : "";
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-bg shadow-2xl shadow-black/60 transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]">
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

function Media({ p, i, featured }) {
  const Cover = covers[p.cover];
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-b border-line bg-linear-to-br ${tints[i % tints.length]} to-transparent ${
        featured ? "aspect-[16/10] p-6 sm:p-10 lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r lg:px-10 lg:py-14" : "aspect-[16/10] p-5"
      }`}
    >
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
      {p.image ? <BrowserShot p={p} /> : Cover && <Cover />}
      {featured && p.chips && (
        <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
          {p.chips.map((c, k) => (
            <motion.span
              key={c}
              className={`absolute rounded-full border border-white/15 bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-fg shadow-lg backdrop-blur ${chipSpots[k % chipSpots.length]}`}
              animate={{ y: [0, k % 2 ? 6 : -6, 0] }}
              transition={{ duration: 4 + k, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-accent">●</span> {c}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, i, featured }) {
  const main = p.live || p.code;
  return (
    <SpotCard
      className={`group h-full overflow-hidden rounded-3xl border border-line bg-surface/80 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_-20px_rgb(52_211_153/0.25)] ${
        featured ? "flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr]" : "flex flex-col"
      }`}
    >
      <Media p={p} i={i} featured={featured} />

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-6"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-fg">{p.category}</span>
            {p.note && (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">{p.note}</span>
            )}
            {featured && (
              <span className="rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 font-mono text-[11px] text-accent-2">Featured</span>
            )}
          </div>
          {main && (
            <a
              href={main}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${p.title}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition duration-300 group-hover:rotate-45 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-bg"
            >
              <FiArrowUpRight aria-hidden />
            </a>
          )}
        </div>

        <h3 className={`mt-4 font-display font-bold tracking-tight ${featured ? "text-[1.7rem] leading-tight" : "text-xl"}`}>{p.title}</h3>
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
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm font-medium">
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

const Projects = () => (
  <Section id="projects">
    <SectionHeading index="04" kicker="projects" title="Things I've built" sub="Live demos where I have them, and the code on GitHub." />
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
          <ProjectCard p={p} i={i} featured={i === 0} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;
