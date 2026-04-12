import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kyorindo: {
          green: "#2D8C4E",
          light: "#7EC8A0",
          gold: "#F5C842",
          cream: "#FFF8E7",
        },
        create: {
          gray: "#9CA3AF",
          blue: "#BFDBFE",
        },
        danger: "#EF4444",
        kanto: {
          dark: "#1E293B",
        },
      },
      fontFamily: {
        dela: ['"Dela Gothic One"', "sans-serif"],
        noto: ['"Noto Sans JP"', "sans-serif"],
        rounded: ['"M PLUS Rounded 1c"', "sans-serif"],
      },
      keyframes: {
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-8px) rotate(-3deg)" },
          "30%": { transform: "translateX(8px) rotate(3deg)" },
          "45%": { transform: "translateX(-6px)" },
          "60%": { transform: "translateX(6px)" },
          "75%": { transform: "translateX(-3px)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.6s ease-out",
        wobble: "wobble 0.8s ease-in-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "confetti-fall": "confetti-fall 3s ease-in forwards",
      },
    },
  },
  plugins: [],
};

export default config;
