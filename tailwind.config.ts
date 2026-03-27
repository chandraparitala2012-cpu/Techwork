import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        "#071528",
          "navy-card": "#0C1E36",
          "navy-border":"#152840",
          teal:        "#00C2D4",
          "teal-dim":  "#008A99",
          bg:          "#FFFFFF",
          alt:         "#F4F7FA",
          fg:          "#09172B",
          muted:       "#5A6E87",
          border:      "#DDE5EF",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
