import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px', // Extra small devices (iPhone SE, small Android phones)
      },
      colors: {
        // Colors referenced by the project's globals.css via CSS variables.
        // Use HSL token wrappers so classes like `border-border` and
        // `bg-AssetArc-bg` are generated and map to CSS variables.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        AssetArc: {
          bg: "hsl(var(--background))",
          "bg-light": "#0b3b34",
          "green-light": "#00FF97",
          "green-accent": "#007D42",
        },
        // Backwards compat simple names used in CSS
        "AssetArc-bg": "hsl(var(--background))",
      },
      fontFamily: {
        "product-sans": [
          "Product Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        "work-sans": [
          "Work Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      blur: {
        "185": "185px",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
