import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { ease } from "./ease";

// scroll karne par content halka sa upar aake dikhta hai
export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SpotCard({ children, className = "", ...rest }) {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div onPointerMove={onMove} className={`spot-card ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function SectionHeading({ index, kicker, title, sub }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-accent">
        <span className="text-muted">{index} /</span> {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-[2.6rem] sm:leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-24 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

const brandIcons = { github: FaGithub, linkedin: FaLinkedin, leetcode: SiLeetcode, gfg: SiGeeksforgeeks };

export function BrandIcon({ name, className = "" }) {
  const Icon = brandIcons[name];
  return Icon ? <Icon className={className} aria-hidden /> : null;
}
