import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 " +
        (scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-matrix/20"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between text-xs">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 grid place-items-center bg-matrix text-bg font-bold text-xs shadow-glow-sm">
            {profile.initials}
          </span>
          <span className="text-matrix2 group-hover:text-matrix">
            paritosh<span className="text-dim">@portfolio</span>
            <span className="text-matrix">:~$</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-mint/80 hover:text-matrix transition"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-3 px-3 py-1.5 border border-matrix/60 text-matrix hover:bg-matrix hover:text-bg transition"
          >
            cat resume.pdf ↗
          </a>
          <span className="ml-4 text-dim hidden lg:inline">
            [{time.toLocaleTimeString("en-GB", { hour12: false })}]
          </span>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden border border-line px-2.5 py-1.5 text-matrix"
          onClick={() => setOpen(!open)}
        >
          {open ? "[ ✕ ]" : "[ ≡ ]"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-matrix/20 bg-bg/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-mint/80 hover:text-matrix"
              >
                ./{l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-2.5 border border-matrix/60 text-matrix"
            >
              cat resume.pdf ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
