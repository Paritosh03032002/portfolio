import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start animate-fade-up">
          <div className="pill bg-accent/10 text-accent border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Open to full-time roles · {profile.location}
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.02]">
            Hi, I'm <span className="grad-text">{profile.name.split(" ")[0]}</span>.
            <br />
            I build <span className="grad-text">AI products</span> in Java & Python.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mt-7 max-w-3xl leading-relaxed">
            {profile.blurb}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="btn-primary text-base px-5 py-3">
              See my work →
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost text-base px-5 py-3">
              Download resume ↗
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost text-base px-5 py-3">
              Get in touch
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 w-full max-w-3xl">
            {profile.highlights.map((h) => (
              <div key={h.label} className="card p-4">
                <div className="text-2xl sm:text-3xl font-semibold font-mono grad-text">{h.value}</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
