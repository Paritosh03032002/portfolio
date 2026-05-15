import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">/ section: projects</div>
        <h2 className="h2 mb-2 prompt">ls -la ~/projects/</h2>
        <p className="text-dim text-sm mb-10">// full-stack, AI-powered, shipped end-to-end</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={
                "panel p-6 flex flex-col hover:border-matrix/60 hover:shadow-glow-sm transition group " +
                (p.flagship ? "lg:col-span-2 border-matrix/40" : "")
              }
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-dim">
                  {"//"} project_{String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-matrix/80 hover:text-matrix border border-line2 px-2 py-1 hover:border-matrix/60"
                    >
                      [github ↗]
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-bg bg-matrix px-2 py-1 hover:bg-matrix2"
                    >
                      [live ↗]
                    </a>
                  )}
                </div>
              </div>

              {p.flagship && (
                <div className="chip mb-3 inline-block text-amber border-amber/40 self-start">
                  ★ FLAGSHIP
                </div>
              )}

              <h3 className="text-2xl font-bold tracking-tight text-matrix group-hover:text-matrix2">
                ./{p.title.toLowerCase().replace(/\s+/g, "-")}
              </h3>
              <div className="text-sm text-mint/80 mt-1">{p.tagline}</div>

              <p className="text-sm text-mint/75 leading-relaxed mt-4 border-l-2 border-line pl-3">
                {p.description}
              </p>

              <ul className="space-y-2 mt-4 flex-1">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-mint/80 leading-relaxed">
                    <span className="text-matrix mt-1 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-line2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
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
