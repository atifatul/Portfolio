import { useEffect, useRef } from "react";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KineticBand from "./components/KineticBand";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// mouse ke peeche chalne wali halki roshni (sirf mouse wale devices pe)
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--cx", `${e.clientX}px`);
        el.style.setProperty("--cy", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

// makkhan jaisi smooth scrolling (Lenis). Reduced motion wale users ke liye band.
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -84 } });
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}

const App = () => {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <CursorGlow />
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <KineticBand />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default App;
