import { skillGroups } from "../data/content";
import Marquee from "./Marquee";

export default function Skills() {
  const flat = skillGroups.flatMap((g) => g.items);
  const half = Math.ceil(flat.length / 2);
  const rowA = flat.slice(0, half);
  const rowB = flat.slice(half);

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-6 mb-8">
        <div className="section-label">/ section: skills</div>
        <h2 className="h2 mb-2 prompt">npm ls --depth=0</h2>
        <p className="text-dim text-sm">// the toolbelt — running on jvm + python</p>
      </div>

      <div className="space-y-2 mb-12">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((g, i) => (
            <div key={g.label} className="panel p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mint mb-3 prompt">
                {g.label.toLowerCase().replace(/[ &]+/g, "_")}.list
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="chip hover:border-matrix/60 hover:text-matrix transition"
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
