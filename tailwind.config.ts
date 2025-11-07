import type { Config } from "tailwindcss";
import animate from "tailwindcss-animated";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#192537", // Azul
        secundario: "#b09e80", // Dorado
        neutro: "#ffffff", // Blanco
      },
    },
  },
  plugins: [animate],
};

export default config;
