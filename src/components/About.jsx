import { education, certifications, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">/ section: about</div>
        <h2 className="h2 mb-2 prompt">cat about.md</h2>
        <p className="text-dim text-sm mb-10">// who is paritosh mayande?</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 panel p-7">
            <div className="text-dim text-xs mb-4 prompt">cat ~/bio.txt</div>
            <p className="text-mint/90 leading-relaxed mb-4">
              <span className="text-matrix">{"> "}</span>
              I started as a Java backend developer learning REST APIs, JPA, and clean MVC patterns. Somewhere along the
              way I built my first LangGraph agent — and now I spend most of my time wiring up multi-agent systems,
              RAG pipelines, and tool-calling LLMs that solve real problems for real users.
            </p>
            <p className="text-mint/90 leading-relaxed mb-4">
              <span className="text-matrix">{"> "}</span>
              At <span className="text-matrix2">Tipstat</span>, I ship production AI products: a LangGraph email triage
              agent serving <span className="text-matrix font-bold">1,000+ users at 200+ emails/day with 100% accuracy</span>,
              a follow-up tracker that eliminated manual chasing, and a meeting intelligence agent processing 500+
              meetings/month via 17 MCP tools.
            </p>
            <p className="text-mint/90 leading-relaxed">
              <span className="text-matrix">{"> "}</span>
              My sweet spot is the place where{" "}
              <span className="text-matrix2">Java enterprise reliability meets Python AI experimentation</span> — equally
              happy debugging a Hibernate N+1 query or designing a tool-calling agent's state graph.
            </p>
          </div>

          <div className="space-y-4">
            <div className="panel p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim mb-2 prompt">edu.json</div>
              <div className="text-matrix2 text-sm">{education.degree}</div>
              <div className="text-xs text-mint/70 mt-1">{education.school}</div>
              <div className="text-xs text-dim mt-1">[{education.period}]</div>
              <div className="text-[11px] text-dim mt-3 leading-relaxed">
                coursework: {education.coursework}
              </div>
            </div>

            <div className="panel p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim mb-3 prompt">certs.list</div>
              <ul className="space-y-2.5">
                {certifications.map((c, i) => (
                  <li key={c.title} className="text-xs">
                    <div className="text-matrix2">
                      <span className="text-matrix/60 mr-1">[{i + 1}]</span>
                      {c.title}
                    </div>
                    <div className="text-dim ml-5">// {c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim mb-2 prompt">status.now</div>
              <div className="text-xs text-mint/90 leading-relaxed">
                <span className="text-matrix">●</span> open to full-time backend / AI roles · based in {profile.location} ·
                remote-friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
