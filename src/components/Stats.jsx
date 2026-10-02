import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { stats } from "../data";
import { Reveal } from "./ui";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setN(value);
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const Stats = () => (
  <div className="relative mx-auto max-w-6xl px-5">
    <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4" y={16}>
      {stats.map((s) => (
        <div key={s.label} className="bg-bg px-6 py-7 sm:px-8 sm:py-8">
          <p className="text-gradient font-display text-4xl font-bold sm:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
        </div>
      ))}
    </Reveal>
  </div>
);

export default Stats;
