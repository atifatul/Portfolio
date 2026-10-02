import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { bandWords } from "../data";

// do tirchhe text bands jo ulti dishaon mein chalte hain, aur scroll ke saath thoda khisakte hain
function Row({ reverse, outline }) {
  const items = [...bandWords, ...bandWords];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div className="band-track flex w-max shrink-0 items-center" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {items.map((w, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= bandWords.length}>
            <span
              className={`px-6 font-display text-5xl font-bold uppercase tracking-tight sm:text-7xl ${
                outline ? (i % 2 ? "text-outline" : "text-fg/90") : i % 2 ? "text-shine" : "text-outline"
              }`}
            >
              {w}
            </span>
            <span className="text-3xl text-accent sm:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const KineticBand = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <div ref={ref} className="relative overflow-hidden py-16 sm:py-24" aria-hidden>
      <motion.div style={{ x: x1 }} className="-mx-[5%] -rotate-2 border-y border-line bg-surface/80 py-5 backdrop-blur">
        <Row outline />
      </motion.div>
      <motion.div style={{ x: x2 }} className="-mx-[5%] mt-4 rotate-1 border-y border-accent/30 bg-accent/[0.06] py-5">
        <Row reverse />
      </motion.div>
    </div>
  );
};

export default KineticBand;
