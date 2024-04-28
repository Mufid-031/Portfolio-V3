import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mine-shaft": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#2a2a2a",
        },
        valhalla: {
          "50": "#ededff",
          "100": "#e1dfff",
          "200": "#cac5ff",
          "300": "#ada2ff",
          "400": "#967dfc",
          "500": "#885ef6",
          "600": "#7c40eb",
          "700": "#6d33cf",
          "800": "#572ca7",
          "900": "#482b84",
          "950": "#321d58",
        },
        "spring-green": {
          "50": "#edfff5",
          "100": "#d5ffea",
          "200": "#aeffd5",
          "300": "#70ffb6",
          "400": "#2bfd90",
          "500": "#00ff7b",
          "600": "#00c058",
          "700": "#009648",
          "800": "#06753d",
          "900": "#076034",
          "950": "#00371b",
        },
        blue: {
          "50": "#f2f2ff",
          "100": "#e9e7ff",
          "200": "#d6d3ff",
          "300": "#b6afff",
          "400": "#9381ff",
          "500": "#714fff",
          "600": "#5f2bfc",
          "700": "#4f17e8",
          "800": "#4314c3",
          "900": "#39139f",
          "950": "#20096c",
        },
      },
    },
    dropShadow: {
      purple: ["0 0 5px #714fff", "0 0 10px #714fff", "0 0 15px #714fff"],

      valhalla: "0 0 10px #714fff",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
