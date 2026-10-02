import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Vite.
      </p>
      <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-accent">
        Back to top <FiArrowUp aria-hidden />
      </a>
    </div>
    {/* neeche bada sa naam */}
    <p
      className="-mb-[0.18em] select-none whitespace-nowrap bg-linear-to-b from-white/[0.13] to-transparent bg-clip-text text-center font-display text-[12.5vw] font-bold leading-none tracking-tighter text-transparent"
      aria-hidden
    >
      ATIF REYYANI
    </p>
  </footer>
);

export default Footer;
