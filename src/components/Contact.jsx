import { profile } from "../data/content";

const channels = [
  { key: "email", value: profile.email, href: `mailto:${profile.email}` },
  { key: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}` },
  { key: "github", value: "Paritosh03032002", href: profile.github },
  { key: "linkedin", value: "paritosh-mayande", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-4xl px-6">
        <div className="section-label">/ section: contact</div>
        <h2 className="h2 mb-2 prompt">cat contact.txt</h2>
        <p className="text-dim text-sm mb-10">
          // open to full-time backend / AI roles · fastest reply via email
        </p>

        <div className="panel p-7 font-mono text-sm">
          <div className="text-dim mb-4">$ ./contact.sh --list</div>
          <div className="space-y-2">
            {channels.map((c) => (
              <a
                key={c.key}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 py-2 px-3 hover:bg-matrix/5 hover:text-matrix transition border border-transparent hover:border-matrix/30 group"
              >
                <span className="text-matrix w-20">[{c.key}]</span>
                <span className="text-mint group-hover:text-matrix flex-1">{c.value}</span>
                <span className="text-dim group-hover:text-matrix">↗</span>
              </a>
            ))}
          </div>
          <div className="text-dim mt-6 text-xs">$ _</div>
        </div>
      </div>
    </section>
  );
}
