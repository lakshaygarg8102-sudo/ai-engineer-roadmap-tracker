import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        sidebar: "#111827",
        card: "#1E293B",
        primary: "#3B82F6",
        success: "#22C55E"
      }
    }
  },
  plugins: []
};

export default config;
