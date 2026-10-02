import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Vite.
      </p>
      <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-accent">
        Back to top <FiArrowUp aria-hidden />
      </a>
    </div>
  </footer>
);

export default Footer;
