import { motion } from "motion/react";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, links, buildWords } from "../data";
import { BrandIcon, Magnetic } from "./ui";
import NeuralBg from "./NeuralBg";
import Scramble from "./Scramble";
import { ease } from "./ease";
import CodeCard from "./CodeCard";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const Hero = () => {
  const words = profile.name.split(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      <NeuralBg />
      <div className="blob -left-48 -top-48 bg-accent/20" aria-hidden />
      <div className="blob -right-48 top-48 bg-accent-2/15 [animation-delay:-9s]" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-5 pb-24 pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-28">
        <div>
          <motion.a
            href="#contact"
            {...fadeUp(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm text-accent transition hover:bg-accent/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </motion.a>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="mr-[0.22em] inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.75, delay: 0.12 + i * 0.12, ease }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.5)} className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
            <span className="text-shine">Software Developer &amp; AI Trainer</span>
          </motion.p>

          <motion.p {...fadeUp(0.56)} className="mt-5 font-mono text-[15px] text-slate-300 sm:text-base">
            <span className="text-accent">&gt;</span> I build <Scramble words={buildWords} className="text-accent-2" />
            <span className="caret ml-1" aria-hidden />
          </motion.p>

          <motion.p {...fadeUp(0.66)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.74)} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-bg shadow-[0_10px_40px_-10px_rgb(52_211_153/0.7)] transition hover:-translate-y-0.5"
            >
              See my work <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden />
            </a>
            </Magnetic>
            <Magnetic>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-5 py-3 font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              Download resume <FiDownload aria-hidden />
            </a>
            </Magnetic>
          </motion.div>

          <motion.div {...fadeUp(0.86)} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="transition hover:-translate-y-0.5 hover:text-accent"
              >
                <BrandIcon name={l.icon} className="h-5 w-5" />
              </a>
            ))}
            <span className="h-4 w-px bg-line" aria-hidden />
            <span className="flex items-center gap-1.5 text-sm">
              <FiMapPin aria-hidden /> {profile.location}
            </span>
          </motion.div>
        </div>

        <CodeCard />
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-line pt-2 lg:flex"
      >
        <motion.span
          className="h-2 w-1 rounded-full bg-accent"
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </a>
    </section>
  );
};

export default Hero;
