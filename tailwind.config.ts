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
          blue: "#1E4169"
        },
        hero: {
          Base: "#DCE6F0"
        }

      },
    },
  },
  plugins: [],
};

export default config;
