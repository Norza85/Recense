import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1B33",
        paper: "#FAFAF8",
        accent: "#FF5A36",
      },
    },
  },
  plugins: [],
};
export default config;
