import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        volkhov: ["var(--font-volkhov)"],
        openSans: ["var(--font-open-sans)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
}
export default config
