import { profile } from "../data/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "✉" },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}`, icon: "☎" },
  { label: "GitHub", value: "Paritosh03032002", href: profile.github, icon: "⌥" },
  { label: "LinkedIn", value: "paritosh-mayande", href: profile.linkedin, icon: "in" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-4xl px-6">
        <div className="section-label">Contact</div>
        <h2 className="h2 mb-3">Let's build something.</h2>
        <p className="text-white/70 max-w-2xl mb-10">
          I'm open to full-time backend and AI engineering roles. The fastest way to reach me is email — I usually reply within a day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-accent/40 transition group"
            >
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent2/20 grid place-items-center font-mono font-semibold text-accent2">
                {c.icon}
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted">{c.label}</div>
                <div className="text-sm font-medium truncate group-hover:text-white">{c.value}</div>
              </div>
              <span className="ml-auto text-muted group-hover:text-accent transition">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
