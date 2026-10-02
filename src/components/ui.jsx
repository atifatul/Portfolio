import { motion, useMotionValue, useSpring } from "motion/react";
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

// heading ke words neeche se ek ek karke upar aate hain
export function SectionHeading({ index, kicker, title, sub }) {
  return (
    <div className="mb-12 max-w-3xl">
      <Reveal y={12}>
        <p className="font-mono text-sm text-accent">
          <span className="text-muted">{index} /</span> {kicker}
        </p>
      </Reveal>
      <motion.h2
        className="mt-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl sm:leading-[1.1]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.07 }}
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
              transition={{ duration: 0.6, ease }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

// button mouse ki taraf halka sa khinchta hai
export function Magnetic({ children, strength = 0.3, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  function onMove(e) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={onLeave} className={`inline-block ${className}`}>
      {children}
    </motion.div>
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
