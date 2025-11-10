import type { Config } from "tailwindcss";
import animate from "tailwindcss-animated";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}, // los colores ya están en globals.css
  },
  plugins: [animate],
};

export default config;
