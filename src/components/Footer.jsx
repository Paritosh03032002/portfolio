import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-matrix/20 mt-10 py-8 text-xs">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-dim">
        <div>
          <span className="text-matrix">$</span> echo "© {new Date().getFullYear()} {profile.name}"
        </div>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link">
            [github]
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
            [linkedin]
          </a>
          <a href={`mailto:${profile.email}`} className="link">
            [email]
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-2 text-[11px] text-line">
        built with react + tailwind · matrix-mode v1.0 · uptime {"{∞}"}
      </div>
    </footer>
  );
}
