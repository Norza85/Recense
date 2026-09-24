import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14171A",
        paper: "#FAFAF8",
        accent: "#0B5FFF",
      },
    },
  },
  plugins: [],
};
export default config;
