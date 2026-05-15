import { education, certifications, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-label">About</div>
        <h2 className="h2 mb-10">A backend engineer who fell in love with agents.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-8">
            <p className="text-white/85 leading-relaxed mb-4">
              I started as a Java backend developer learning REST APIs, JPA, and clean MVC patterns. Somewhere along the
              way I built my first LangGraph agent — and now I spend most of my time wiring up multi-agent systems,
              RAG pipelines, and tool-calling LLMs that solve real problems for real users.
            </p>
            <p className="text-white/85 leading-relaxed mb-4">
              At <span className="text-white">Tipstat</span>, I ship production AI products: a LangGraph email triage
              agent serving <span className="text-accent2">1,000+ users at 200+ emails/day with 100% accuracy</span>, a
              follow-up tracker that eliminated manual chasing, and a meeting intelligence agent processing 500+
              meetings/month via 17 MCP tools.
            </p>
            <p className="text-white/85 leading-relaxed">
              My sweet spot is the place where{" "}
              <span className="text-white">Java enterprise reliability meets Python AI experimentation</span> — and
              I'm equally happy debugging a Hibernate N+1 query or designing a tool-calling agent's state graph.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="text-xs uppercase tracking-wider text-muted mb-2">Education</div>
              <div className="font-semibold">{education.degree}</div>
              <div className="text-sm text-white/70 mt-1">{education.school}</div>
              <div className="text-sm text-muted mt-1 font-mono">{education.period}</div>
              <div className="text-xs text-muted mt-3 leading-relaxed">
                Coursework: {education.coursework}
              </div>
            </div>

            <div className="card p-6">
              <div className="text-xs uppercase tracking-wider text-muted mb-3">Certifications</div>
              <ul className="space-y-2.5">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <div className="text-sm font-medium">{c.title}</div>
                    <div className="text-xs text-muted">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <div className="text-xs uppercase tracking-wider text-muted mb-2">Currently</div>
              <div className="text-sm">
                Open to full-time backend / AI engineering roles. Based in {profile.location}, open to remote.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
