import { useEffect, useRef } from "react";

// Hero ke peeche "neural network": points dheere chalte hain, paas wale points line se judte hain,
// aur mouse ke paas aane par points mouse se jud jaate hain.
const LINK = 130;
const MOUSE = 170;

const NeuralBg = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let nodes = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.8,
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(52, 211, 153, ${(1 - d / LINK) * 0.24})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        const near = dm < MOUSE;
        if (near) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dm / MOUSE) * 0.45})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = near ? "rgba(34, 211, 238, 0.9)" : "rgba(148, 163, 184, 0.6)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, near ? a.r + 0.8 : a.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduce) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      if (reduce) frame();
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    frame();
    // hero screen pe na ho to animation band, taaki battery na khaye
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (!running || reduce) frame();
    });
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,black_40%,transparent_85%)]"
    />
  );
};

export default NeuralBg;
