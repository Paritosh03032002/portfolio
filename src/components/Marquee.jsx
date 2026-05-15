export default function Marquee({ items = [], reverse = false, className = "" }) {
  // duplicate items so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <div className={"overflow-hidden border-y border-line/70 bg-panel/40 " + className}>
      <div
        className={"marquee-track py-3 " + (reverse ? "animate-marquee-rev" : "animate-marquee")}
        style={{ animationPlayState: "running" }}
      >
        {doubled.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center px-6 text-sm text-matrix2/90 whitespace-nowrap"
          >
            <span className="text-matrix/60 mr-2">▸</span>
            {it}
            <span className="mx-6 text-line">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
