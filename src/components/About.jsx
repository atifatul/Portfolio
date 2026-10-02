import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiAward, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import photo from "../assets/atif.webp";
import { about, profile, stats, links, stackTree } from "../data";
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

// terminal jisme "npm ls atif" chalta hai aur stack tree ki tarah aata hai
function StackTerminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const lines = [
    { text: "atif@2026", cls: "text-muted" },
    ...stackTree.map((pkgs, i) => ({
      branch: i === stackTree.length - 1 ? "└── " : "├── ",
      text: pkgs.join(", "),
      cls: "text-slate-200",
    })),
    { text: "found 0 vulnerabilities", cls: "text-accent" },
  ];

  return (
    <SpotCard className="h-full overflow-hidden rounded-3xl border border-line bg-[#060a12]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-muted">my stack</span>
      </div>
      <div ref={ref} className="p-5 font-mono text-[13px] leading-6">
        <p>
          <span className="text-accent">$</span> <span className="text-fg">npm ls atif</span>
        </p>
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}>
          {lines.map((l, i) => (
            <motion.p key={i} variants={{ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0 } }} className="whitespace-pre">
              {l.branch && <span className="text-slate-600">{l.branch}</span>}
              <span className={l.cls}>{l.text}</span>
            </motion.p>
          ))}
        </motion.div>
        {inView && <span className="caret mt-1" aria-hidden />}
      </div>
    </SpotCard>
  );
}

const tile = "h-full rounded-3xl border border-line bg-surface/70 p-6";
const label = "font-mono text-[11px] uppercase tracking-widest text-muted";

const leetcode = links.find((l) => l.icon === "leetcode");
const gfg = links.find((l) => l.icon === "gfg");

function StatLink({ href, name, stat }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block h-full">
      <SpotCard className={`${tile} flex flex-col justify-between gap-6`}>
        <p className={`${label} flex items-center justify-between`}>
          {name}
          <FiArrowUpRight
            className="text-base transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </p>
        <p className="font-display text-5xl font-bold text-fg">
          <Counter value={stat.value} suffix={stat.suffix} />
        </p>
        <p className="text-sm text-muted">{stat.label}</p>
      </SpotCard>
    </a>
  );
}

const About = () => (
  <Section id="about">
    <SectionHeading index="01" kicker="about" title="A bit about me" />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* photo apne asli shape (4:5) mein, taaki kahin se na kate; neeche location */}
      <div className="flex flex-col gap-4">
        <Reveal>
          <motion.div
            whileHover={{ rotate: -1, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <img src={photo} alt={profile.name} width="492" height="632" className="block aspect-[492/632] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg/95 via-bg/60 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold">{profile.name}</p>
              <p className="text-sm text-accent">{profile.role}</p>
            </div>
          </motion.div>
        </Reveal>
        <Reveal className="flex-1" delay={0.05}>
          <SpotCard className={`${tile} relative flex flex-col justify-between gap-3 overflow-hidden`}>
            <p className={label}>Based in</p>
            <span className="absolute right-6 top-5 flex h-12 w-12 items-center justify-center" aria-hidden>
              <span className="absolute h-full w-full animate-ping rounded-full border border-accent/40" />
              <span className="absolute h-7 w-7 rounded-full bg-accent/15" />
              <FiMapPin className="relative text-accent" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">Delhi NCR</p>
              <p className="mt-1 text-sm text-muted">Remote, or on-site in Delhi NCR</p>
            </div>
          </SpotCard>
        </Reveal>
      </div>

      {/* intro */}
      <Reveal className="lg:col-span-2" delay={0.05}>
        <SpotCard className={`${tile} flex flex-col justify-center p-7 sm:p-9`}>
          <p className="font-display text-xl font-semibold leading-snug text-fg sm:text-2xl lg:text-[1.65rem]">{about.paragraphs[0]}</p>
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </SpotCard>
      </Reveal>

      {/* right now + hours */}
      <div className="flex flex-col gap-4">
        <Reveal className="flex-1" delay={0.1}>
          <SpotCard className={`${tile} flex flex-col justify-between gap-4`}>
            <p className={`${label} flex items-center gap-2`}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Right now
            </p>
            <p className="leading-snug text-fg">Training and evaluating AI models on Outlier, Alignerr and Chegg</p>
            <p className="flex items-center gap-2 font-mono text-sm text-accent-2">
              <FiClock aria-hidden /> <DelhiTime /> in Delhi
            </p>
          </SpotCard>
        </Reveal>
        <Reveal className="flex-1" delay={0.15}>
          <SpotCard className={`${tile} flex flex-col justify-between gap-4 bg-linear-to-br from-accent/[0.12] to-transparent`}>
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
      </div>

      <Reveal>
        <StatLink href={leetcode.href} name="LeetCode" stat={stats.leetcode} />
      </Reveal>
      <Reveal delay={0.05}>
        <StatLink href={gfg.href} name="GeeksforGeeks" stat={stats.gfg} />
      </Reveal>
      <Reveal delay={0.1}>
        <SpotCard className={`${tile} flex flex-col gap-4`}>
          <p className={`${label} flex items-center gap-2`}>
            <FiUsers aria-hidden /> In college
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {about.college.map((c) => (
              <li key={c} className="flex gap-2.5">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </SpotCard>
      </Reveal>
      <Reveal className="md:col-span-2 lg:col-span-1" delay={0.15}>
        <StackTerminal />
      </Reveal>
    </div>
  </Section>
);

export default About;
