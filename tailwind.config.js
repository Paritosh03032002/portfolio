/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#050a05",
        ink: "#0a120a",
        line: "#173a17",
        line2: "#0d2a0d",
        matrix: "#00ff41",
        matrix2: "#39ff7a",
        mint: "#7cffb2",
        amber: "#ffb000",
        muted: "#3a6e3a",
        dim: "#6b8e6b",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "ui-monospace", "monospace"],
        sans: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      animation: {
        blink: "blink 1s steps(2) infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        flicker: "flicker 3s infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
        scanline: "scanline 6s linear infinite",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        flicker: {
          "0%,18%,22%,25%,53%,57%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.7" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,255,65,0.4), 0 0 20px rgba(0,255,65,0.15)",
        "glow-sm": "0 0 12px rgba(0,255,65,0.25)",
      },
    },
  },
  plugins: [],
};
