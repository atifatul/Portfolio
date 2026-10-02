import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // jo section screen ke beech mein hai, uska link highlight hota hai
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "top" ? "" : e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [{ id: "top" }, ...items].forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-accent to-accent-2"
      />
      <nav
        className={`mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open ? "border-line bg-bg/75 shadow-lg shadow-black/30 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="text-accent">&lt;</span>Atif<span className="text-accent"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative isolate rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/20 sm:inline-flex"
          >
            Resume <FiDownload aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-line bg-bg/95 p-2 backdrop-blur-xl md:hidden"
          >
            {items.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-fg hover:bg-white/[0.05]"
              >
                {label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-medium text-bg"
            >
              Download resume <FiDownload aria-hidden />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
