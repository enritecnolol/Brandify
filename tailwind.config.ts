import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandify: {
          primary: "#1A237E",
          secondary: "#4DD0E1",
          light: "#B2EBF2",
          dark: "#0D47A1",
          bgLight: "#E3F2FD",
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#4DD0E1",
          600: "#1A237E",
          700: "#0D47A1",
          800: "#0D47A1",
          900: "#0D47A1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"], // If using Inter font
        heading: ["var(--font-poppins)"], // If using Poppins for headings
      },
      fontSize: {
        "heading-1": ["3.5rem", { lineHeight: "1.2" }],
        "heading-2": ["2.5rem", { lineHeight: "1.3" }],
        "heading-3": ["2rem", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "6rem",
        element: "2rem",
      },
      borderRadius: {
        brandify: "1rem",
      },
      boxShadow: {
        brandify: "0 4px 20px rgba(26, 35, 126, 0.1)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
