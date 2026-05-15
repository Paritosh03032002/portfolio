import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-40 transition-colors duration-300 " +
        (scrolled ? "backdrop-blur bg-canvas/75 border-b border-line/60" : "bg-transparent")
      }
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 grid place-items-center font-bold text-canvas text-sm">
            {profile.initials}
          </span>
          <span className="font-semibold tracking-tight group-hover:text-white">
            {profile.name.split(" ")[0]}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition rounded-lg hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary ml-2">
            Resume ↗
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden btn-ghost px-2.5"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-canvas/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
