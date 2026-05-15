import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">Projects</div>
        <h2 className="h2 mb-3">Things I've built end-to-end.</h2>
        <p className="text-white/70 max-w-2xl mb-12">
          Full-stack, AI-powered, and shipped — not toy demos. Each one taught me something.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={
                "card p-7 flex flex-col " +
                (p.flagship ? "lg:col-span-2 border-accent/30 bg-gradient-to-br from-panel to-accent/[0.04]" : "")
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  {p.flagship && (
                    <span className="pill bg-accent/15 text-accent mb-2 inline-block">⭐ Flagship</span>
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <div className="text-sm text-accent2 mt-0.5 font-mono">{p.tagline}</div>
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost px-3 py-2 text-xs"
                      aria-label="GitHub repo"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary px-3 py-2 text-xs"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-white/75 leading-relaxed mt-3">{p.description}</p>

              <ul className="space-y-2 mt-4 flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-white/75 leading-relaxed">
                    <span className="text-accent2 mt-1.5 shrink-0">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-line/60">
                {p.stack.map((s) => (
                  <span key={s} className="pill bg-ink border border-line text-white/70 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
