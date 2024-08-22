import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9edcc",
        secondary: "#5d3c18",
        darkBackground: "#231C07",
        darkForeground: "#ffffff",
        lightBackground: "#f8edeb",
        lightForeground: "#000000"
      },
    },
  },
  plugins: [],
};
export default config;
