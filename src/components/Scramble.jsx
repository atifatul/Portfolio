import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#01";

// words ek ek karke badalte hain, beech mein letters "hacker" style mein scramble hote hain
const Scramble = ({ words, hold = 2600, className = "" }) => {
  const [text, setText] = useState(words[0]);
  const current = useRef(words[0]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    let raf = 0;
    let timer = 0;

    function show(value) {
      current.current = value;
      setText(value);
    }

    function scrambleTo(target) {
      const len = Math.max(current.current.length, target.length);
      const start = performance.now();
      const duration = 650;
      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        let out = "";
        for (let i = 0; i < len; i++) {
          if (t > i / len) out += target[i] ?? "";
          else out += target[i] === " " ? " " : CHARS[(Math.random() * CHARS.length) | 0];
        }
        show(out);
        if (t < 1) raf = requestAnimationFrame(step);
        else timer = setTimeout(next, hold);
      }
      raf = requestAnimationFrame(step);
    }

    function next() {
      index = (index + 1) % words.length;
      if (reduce) {
        show(words[index]);
        timer = setTimeout(next, hold);
      } else scrambleTo(words[index]);
    }

    timer = setTimeout(next, hold);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [words, hold]);

  return (
    <>
      <span className={className} aria-hidden>
        {text}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </>
  );
};

export default Scramble;
