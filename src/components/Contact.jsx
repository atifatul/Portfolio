import { useState } from "react";
import { FiCheck, FiCopy, FiDownload, FiMail, FiArrowUpRight } from "react-icons/fi";
import { profile, links } from "../data";
import { BrandIcon, Reveal, Section } from "./ui";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="blob left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 bg-accent/20" aria-hidden />

          <div className="relative">
            <p className="font-mono text-sm text-accent">
              <span className="text-muted">06 /</span> contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I'm looking for more AI training and code evaluation projects, and I'm open to frontend and full-stack
              developer roles, remote or on-site in Delhi NCR. Email is the fastest way to reach me.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-bg shadow-[0_10px_40px_-10px_rgb(52_211_153/0.7)] transition hover:-translate-y-0.5"
              >
                <FiMail aria-hidden /> {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-fg transition hover:border-accent/50"
                aria-label="Copy email address"
              >
                {copied ? <FiCheck className="text-accent" aria-hidden /> : <FiCopy aria-hidden />}
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-5 py-3 font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent/50"
              >
                Resume <FiDownload aria-hidden />
              </a>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-bg/60 px-4 py-3.5 text-left transition hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <BrandIcon name={l.icon} className="h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-fg">{l.label}</span>
                    <span className="block truncate font-mono text-[11px] text-muted">{l.handle}</span>
                  </span>
                  <FiArrowUpRight className="ml-auto shrink-0 text-muted opacity-0 transition group-hover:opacity-100" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
