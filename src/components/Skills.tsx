import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">Skills</div>
        <h2 className="h2 mb-12">The toolbelt.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((g) => (
            <div key={g.label} className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent2 mb-4">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="pill bg-ink border border-line text-white/80 hover:border-accent/40 hover:text-white transition font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
