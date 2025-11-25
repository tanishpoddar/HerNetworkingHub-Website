import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#FF007F",
        "background-light": "#F5F5F5",
        "background-dark": "#0A0A0A",
        "soft-pink": "#F9A8D4",
        "electric-purple": "#9D4EDD",
        "vibrant-teal": "#00DFD8",
        "foreground-dark": "#F5F5F5",
        "card-dark": "#1A1A1A",
        "border-dark": "#2A2A2A",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
