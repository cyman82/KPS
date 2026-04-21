import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        school: {
          red: "#B22222",
          redDark: "#8B1E1E",
          saffron: "#F4A300",
          ivory: "#FFFDF7",
          cream: "#F8F5EE",
          charcoal: "#1F2937",
          gray: "#4B5563"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(31, 41, 55, 0.10)",
        panel: "0 22px 48px rgba(31, 41, 55, 0.12)",
        premium: "0 18px 45px rgba(178, 34, 34, 0.12)"
      },
      backgroundImage: {
        "school-hero":
          "linear-gradient(135deg, #FFFDF7 0%, #F8F5EE 100%)"
      }
    }
  },
  plugins: []
};

export default config;
