import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { FiRotateCcw, FiAward, FiCpu } from "react-icons/fi";
import { SpotCard } from "./ui";
import { ease } from "./ease";

// atif.js tab: har line [rang, text] ke pieces mein hai
const color = {
  kw: "text-fuchsia-400",
  name: "text-accent",
  key: "text-sky-300",
  str: "text-amber-200",
  punc: "text-slate-500",
};

const jsLines = [
  [["kw", "const "], ["name", "atif"], ["punc", " = {"]],
  [["key", "  role"], ["punc", ": ["], ["str", '"Software Developer"'], ["punc", ", "], ["str", '"AI Trainer"'], ["punc", "],"]],
  [["key", "  stack"], ["punc", ": ["], ["str", '"React"'], ["punc", ", "], ["str", '"Node.js"'], ["punc", ", "], ["str", '"Python"'], ["punc", "],"]],
  [["key", "  aiWork"], ["punc", ": ["], ["str", '"code evals"'], ["punc", ", "], ["str", '"RLHF"'], ["punc", "],"]],
  [["key", "  games"], ["punc", ": "], ["str", '"Phaser"'], ["punc", ","]],
  [["key", "  basedIn"], ["punc", ": "], ["str", '"Delhi NCR"'], ["punc", ","]],
  [["key", "  openTo"], ["punc", ": ["], ["str", '"remote"'], ["punc", ", "], ["str", '"on-site"'], ["punc", "],"]],
  [["punc", "};"]],
];

const checks = [
  { ok: true, text: "original fix passes the tests" },
  { ok: true, text: "unfixed code fails" },
  { ok: true, text: "no hints in the prompt" },
  { ok: false, text: 'agent said "done", tests never ran' },
];

function JsView() {
  return (
    <div className="overflow-x-auto font-mono text-[12.5px] leading-7 sm:text-[13.5px]">
      {jsLines.map((line, i) => (
        <motion.div
          key={i}
          className="flex whitespace-pre"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.08 * i }}
        >
          <span className="mr-5 w-4 shrink-0 select-none text-right text-slate-600">{i + 1}</span>
          <span>
            {line.map(([kind, text], j) => (
              <span key={j} className={color[kind]}>
                {text}
              </span>
            ))}
            {i === jsLines.length - 1 && <span className="caret ml-1" />}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// review.md tab: checks ek ek karke chalte hain, jaise ek code review run ho raha ho
function ReviewView({ onReplay }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step > checks.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 450 : 750);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="font-mono text-[12.5px] leading-8 sm:text-[13.5px]">
      <p className="text-muted">
        $ <span className="text-fg">review task --checks</span>
      </p>
      {checks.slice(0, step).map((c, i) => (
        <motion.p key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
          <span className={c.ok ? "text-accent" : "text-danger"}>{c.ok ? "✓" : "✗"}</span>{" "}
          <span className={c.ok ? "text-slate-300" : "text-red-200"}>{c.text}</span>
        </motion.p>
      ))}
      {step < checks.length && (
        <p className="flex items-center gap-2 text-muted">
          <span className="inline-block h-3 w-3 animate-spin rounded-full border border-muted border-t-transparent" />
          checking...
        </p>
      )}
      {step > checks.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1">
          <p>
            <span className="text-accent-2">→</span> <span className="text-fg">3 passed, 1 failed. feedback written.</span>
          </p>
          <button
            type="button"
            onClick={onReplay}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1 text-xs text-muted transition hover:border-accent/50 hover:text-accent"
          >
            <FiRotateCcw aria-hidden /> run again
          </button>
        </motion.div>
      )}
    </div>
  );
}

const tabs = ["atif.js", "review.md"];

// card mouse ke hisaab se halka sa 3D mein ghoomta hai
function useTilt() {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 16 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 16 });
  function onPointerMove(e) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  }
  function onPointerLeave() {
    rx.set(0);
    ry.set(0);
  }
  return { style: { rotateX, rotateY, transformPerspective: 1100 }, onPointerMove, onPointerLeave };
}

const CodeCard = () => {
  const tilt = useTilt();
  const [tab, setTab] = useState(0);
  const [picked, setPicked] = useState(false);
  const [run, setRun] = useState(0);

  // pehle atif.js dikhta hai, phir apne aap review.md chalta hai (jab tak user khud tab na badle)
  useEffect(() => {
    if (picked) return;
    const t = setTimeout(() => setTab(1), 4200);
    return () => clearTimeout(t);
  }, [picked]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease }}
      className="relative mx-auto w-full max-w-[520px] [perspective:1200px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-linear-to-br from-accent/25 via-transparent to-accent-2/20 blur-2xl" aria-hidden />
      <motion.div {...tilt} className="relative">

      <SpotCard className="overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-4 border-b border-line bg-white/[0.02] px-4">
          <div className="flex gap-1.5 py-3.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex self-stretch" role="tablist">
            {tabs.map((name, i) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => {
                  setPicked(true);
                  setTab(i);
                  if (i === 1) setRun((r) => r + 1);
                }}
                className={`relative px-3 font-mono text-xs transition-colors ${tab === i ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                {name}
                {tab === i && <motion.span layoutId="tab-line" className="absolute inset-x-2 bottom-0 h-0.5 rounded bg-accent" />}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[290px] p-5 sm:h-[300px] sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab === 0 ? "js" : `review-${run}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tab === 0 ? <JsView /> : <ReviewView onReplay={() => setRun((r) => r + 1)} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </SpotCard>

      <motion.div
        className="absolute -right-3 -top-5 flex items-center gap-2 rounded-xl border border-line bg-surface-2/95 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur sm:-right-6"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiAward className="text-accent" aria-hidden /> Promoted to reviewer
      </motion.div>
      <motion.div
        className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl border border-line bg-surface-2/95 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur sm:-left-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiCpu className="text-accent-2" aria-hidden /> 500+ hours of AI training
      </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CodeCard;
