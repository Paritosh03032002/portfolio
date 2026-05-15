import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">/ section: experience</div>
        <h2 className="h2 mb-2 prompt">git log --author=paritosh</h2>
        <p className="text-dim text-sm mb-12">// where i've shipped things</p>

        <div className="relative pl-6 sm:pl-8 border-l border-matrix/40">
          {experience.map((e, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[32px] sm:-left-[40px] top-2 w-3 h-3 bg-matrix shadow-glow-sm" />
              <div className="panel p-6 hover:border-matrix/60 hover:shadow-glow-sm transition">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-matrix2">
                      <span className="text-matrix">$</span> {e.role}
                      <span className="text-dim"> @ </span>
                      <span className="text-mint">{e.company}</span>
                    </h3>
                    <div className="text-xs text-dim mt-1">// {e.location}</div>
                  </div>
                  <div className="chip text-mint border-matrix/40">[{e.period}]</div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-mint/85 leading-relaxed">
                      <span className="text-matrix mt-1 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-line2">
                  {e.stack.map((s) => (
                    <span key={s} className="chip">
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
