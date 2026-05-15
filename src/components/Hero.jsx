import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import { profile } from "../data/content";

export default function Hero() {
  const stats = profile.highlights;

  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="animate-fade-up">
          <div className="chip mb-6 text-matrix">
            <span className="w-1.5 h-1.5 rounded-full bg-matrix mr-2 animate-pulse shadow-glow-sm" />
            status: open_to_full_time · loc: bengaluru.in
          </div>

          <div className="panel p-5 mb-6 font-mono text-sm sm:text-base text-matrix2/90">
            <div className="text-dim mb-2">
              Last login: {new Date().toDateString()} on ttys001
            </div>
            <Typewriter
              speed={32}
              lines={[
                "> whoami",
                "  paritosh mayande",
                "> cat ~/role.txt",
                "  Backend & AI Engineer",
                "> ls ~/stack/",
                "  java/  spring-boot/  python/  langgraph/  rag/  docker/",
              ]}
            />
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] text-matrix">
            Hi, I'm <span className="grad-text">{profile.name.split(" ")[0]}</span>.
            <br />
            <span className="text-matrix2">{">"} </span>
            I build <span className="grad-text">AI products</span>
            <br />
            in <span className="text-matrix2">Java &amp; Python</span>.
          </h1>

          <p className="text-base sm:text-lg text-mint/80 mt-7 max-w-3xl leading-relaxed border-l-2 border-matrix/50 pl-4">
            {profile.blurb}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="btn-primary text-base px-5 py-3">
              ./run --see-my-work
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost text-base px-5 py-3">
              wget resume.pdf ↗
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost text-base px-5 py-3">
              ./contact.sh
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 max-w-4xl">
            {stats.map((h, i) => (
              <StatBox key={h.label} stat={h} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ stat, delay = 0 }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay + 400);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className="panel-hover p-4 group">
      <div
        className={
          "text-2xl sm:text-3xl font-bold font-mono grad-text transition-all duration-500 " +
          (shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
        }
      >
        {stat.value}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-dim mt-2 group-hover:text-mint">
        {"// "}
        {stat.label}
      </div>
    </div>
  );
}
