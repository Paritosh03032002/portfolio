import { useEffect, useState } from "react";

export default function Typewriter({ lines = [], speed = 38, startDelay = 200, className = "" }) {
  const [out, setOut] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const local = lines.map(() => "");

    async function run() {
      await wait(startDelay);
      while (lineIdx < lines.length && !cancelled) {
        const target = lines[lineIdx];
        if (charIdx <= target.length) {
          local[lineIdx] = target.slice(0, charIdx);
          setOut([...local]);
          charIdx++;
          await wait(speed);
        } else {
          lineIdx++;
          charIdx = 0;
          await wait(220);
        }
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, startDelay]);

  return (
    <div className={className}>
      {(out.length ? out : lines.map(() => "")).map((l, i) => (
        <div key={i} className={i === out.length - 1 && !done ? "cursor" : ""}>
          {l || " "}
        </div>
      ))}
    </div>
  );
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
