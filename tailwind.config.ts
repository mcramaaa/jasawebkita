import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat Variable",
      },
      colors: {
        brand: {
          DEFAULT: "#1e4169",
          light: "#a0bed7",
          dark: "#000f23",
          bone: "#dce6f0",
          white: "#fafafa",
          yellow: "#fdc500",
          blue: "#1E4169",
          grey: "#2d2e32",
          core: "#00e5ff",
          core2: "#00c3ff",
          core2Dark: "#0085ad",
          coreDark: "#013a41",
          darkgrey: "#1c1d20",
        },
        hero: {
          Base: "#DCE6F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
