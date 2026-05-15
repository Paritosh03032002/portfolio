import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">Experience</div>
        <h2 className="h2 mb-12">Where I've built things.</h2>

        <div className="relative pl-6 sm:pl-8 border-l border-line">
          {experience.map((e, i) => (
            <div key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[34px] sm:-left-[42px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-accent to-accent2 ring-4 ring-canvas" />
              <div className="card p-7">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {e.role} ·{" "}
                      <span className="text-white/70">{e.company}</span>
                    </h3>
                    <div className="text-sm text-muted mt-0.5">{e.location}</div>
                  </div>
                  <div className="pill bg-white/5 text-white/70 border border-line font-mono">{e.period}</div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-white/80 leading-relaxed">
                      <span className="text-accent mt-2 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-line/60">
                  {e.stack.map((s) => (
                    <span key={s} className="pill bg-ink border border-line text-white/70 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
