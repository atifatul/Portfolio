import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiAward, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import {
  SiReact, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiTailwindcss, SiDocker, SiGit, SiTypescript, SiExpress,
} from "react-icons/si";
import photo from "../assets/atif.webp";
import { about, profile, stats, links } from "../data";
import { Reveal, Section, SectionHeading, SpotCard } from "./ui";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setN(value);
    const controls = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// Delhi ka abhi ka time, har 15 second mein update
function DelhiTime() {
  const fmt = useMemo(
    () => new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }),
    []
  );
  const [now, setNow] = useState(() => fmt.format(new Date()));
  useEffect(() => {
    const t = setInterval(() => setNow(fmt.format(new Date())), 15000);
    return () => clearInterval(t);
  }, [fmt]);
  return <span className="uppercase">{now}</span>;
}

const inner = [
  [SiReact, "#61dafb"],
  [SiJavascript, "#f7df1e"],
  [SiPython, "#4b8bbe"],
  [SiNodedotjs, "#5fa04e"],
];
const outer = [
  [SiMongodb, "#47a248"],
  [SiTailwindcss, "#38bdf8"],
  [SiDocker, "#2496ed"],
  [SiGit, "#f05032"],
  [SiTypescript, "#3178c6"],
  [SiExpress, "#e6edf6"],
];

function Ring({ icons, size, dur, reverse }) {
  return (
    <div className={`orbit ${reverse ? "reverse" : ""}`} style={{ width: size, height: size, "--dur": dur }}>
      {icons.map(([Icon, hex], i) => (
        <span key={i} className="orbit-item" style={{ "--a": `${(360 / icons.length) * i}deg`, "--r": `${size / 2}px` }}>
          <span className="-ml-5 -mt-5 h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 shadow-lg shadow-black/40">
            <Icon style={{ color: hex }} className="h-5 w-5" aria-hidden />
          </span>
        </span>
      ))}
    </div>
  );
}

const tile = "h-full rounded-3xl border border-line bg-surface/70 p-6";
const label = "font-mono text-[11px] uppercase tracking-widest text-muted";

const leetcode = links.find((l) => l.icon === "leetcode");
const gfg = links.find((l) => l.icon === "gfg");

const About = () => (
  <Section id="about">
    <SectionHeading index="01" kicker="about" title="A bit about me" />

    <div className="grid grid-flow-dense auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* photo */}
      <Reveal className="lg:row-span-2">
        <motion.div
          whileHover={{ rotate: -1.2, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-line bg-surface"
        >
          <img src={photo} alt={profile.name} className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-accent">{profile.role}</p>
          </div>
        </motion.div>
      </Reveal>

      {/* intro */}
      <Reveal className="md:col-span-2 lg:row-span-2" delay={0.05}>
        <SpotCard className={`${tile} flex flex-col justify-center p-7 sm:p-9`}>
          <p className="font-display text-xl font-semibold leading-snug text-fg sm:text-2xl lg:text-[1.7rem]">{about.paragraphs[0]}</p>
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </SpotCard>
      </Reveal>

      {/* right now */}
      <Reveal delay={0.1}>
        <SpotCard className={`${tile} flex flex-col justify-between`}>
          <p className={`${label} flex items-center gap-2`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Right now
          </p>
          <p className="mt-3 leading-snug text-fg">Training and evaluating AI models on Outlier, Alignerr and Chegg</p>
          <p className="mt-4 flex items-center gap-2 font-mono text-sm text-accent-2">
            <FiClock aria-hidden /> <DelhiTime /> in Delhi
          </p>
        </SpotCard>
      </Reveal>

      {/* hours */}
      <Reveal delay={0.15}>
        <SpotCard className={`${tile} flex flex-col justify-between bg-linear-to-br from-accent/[0.12] to-transparent`}>
          <p className={label}>AI training</p>
          <p className="text-shine font-display text-6xl font-bold">
            <Counter value={stats.hours.value} suffix={stats.hours.suffix} />
          </p>
          <div>
            <p className="text-sm text-fg">{stats.hours.label}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-accent">
              <FiAward aria-hidden /> Promoted to reviewer on Outlier
            </p>
          </div>
        </SpotCard>
      </Reveal>

      {/* leetcode */}
      <Reveal>
        <a href={leetcode.href} target="_blank" rel="noreferrer" className="group block h-full">
          <SpotCard className={`${tile} flex flex-col justify-between`}>
            <p className={`${label} flex items-center justify-between`}>
              LeetCode <FiArrowUpRight className="text-base transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
            </p>
            <p className="font-display text-5xl font-bold text-fg">
              <Counter value={stats.leetcode.value} suffix={stats.leetcode.suffix} />
            </p>
            <p className="text-sm text-muted">{stats.leetcode.label}</p>
          </SpotCard>
        </a>
      </Reveal>

      {/* gfg */}
      <Reveal delay={0.05}>
        <a href={gfg.href} target="_blank" rel="noreferrer" className="group block h-full">
          <SpotCard className={`${tile} flex flex-col justify-between`}>
            <p className={`${label} flex items-center justify-between`}>
              GeeksforGeeks <FiArrowUpRight className="text-base transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
            </p>
            <p className="font-display text-5xl font-bold text-fg">
              <Counter value={stats.gfg.value} suffix={stats.gfg.suffix} />
            </p>
            <p className="text-sm text-muted">{stats.gfg.label}</p>
          </SpotCard>
        </a>
      </Reveal>

      {/* stack orbit */}
      <Reveal className="md:col-span-2 lg:row-span-2" delay={0.1}>
        <SpotCard className={`${tile} relative min-h-[360px] overflow-hidden`}>
          <p className={label}>My stack</p>
          <div className="absolute inset-0 top-6 flex items-center justify-center">
            <div className="relative h-[300px] w-[300px]">
              <Ring icons={outer} size={280} dur="46s" />
              <Ring icons={inner} size={150} dur="30s" reverse />
              <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 font-display text-xl font-bold text-accent shadow-[0_0_40px_rgb(52_211_153/0.35)]">
                {"</>"}
              </div>
            </div>
          </div>
        </SpotCard>
      </Reveal>

      {/* location */}
      <Reveal>
        <SpotCard className={`${tile} relative flex flex-col justify-between overflow-hidden`}>
          <p className={label}>Based in</p>
          <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center" aria-hidden>
            <span className="absolute h-full w-full animate-ping rounded-full border border-accent/40" />
            <span className="absolute h-8 w-8 rounded-full bg-accent/15" />
            <FiMapPin className="relative text-accent" />
          </span>
          <p className="font-display text-2xl font-semibold">Delhi NCR</p>
          <p className="text-sm text-muted">Remote, or on-site in Delhi NCR</p>
        </SpotCard>
      </Reveal>

      {/* college */}
      <Reveal delay={0.05}>
        <SpotCard className={`${tile} flex flex-col justify-between`}>
          <p className={`${label} flex items-center gap-2`}>
            <FiUsers aria-hidden /> In college
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
            {about.college.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </SpotCard>
      </Reveal>
    </div>
  </Section>
);

export default About;
