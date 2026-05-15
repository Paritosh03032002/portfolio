import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, JavaScript & Tailwind.
        </div>
        <div className="flex gap-4 text-sm">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
