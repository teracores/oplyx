import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}", // Fix typo from 'component' to 'components'
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
          "25%": { opacity: "0.2", transform: "scale(2)" },
        },
        pulse1: {
          "0%, 100%": { opacity: "1", transform: "scale(3)" },
          "50%": { opacity: "0.5", transform: "scale(2.5)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(3)" },
          "70%": { opacity: "0.7", transform: "scale(3.5)" },
        },
      },
      animation: {
        appear: "appear 0.5s ease-out",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
