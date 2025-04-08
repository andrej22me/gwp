import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        blogPostTitle: "var(--blogPostTitle)",
        gold: "#B39852",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
        ubuntu: ["Ubuntu", "sans-serif"], // Add Montserrat
      },
      boxShadow: {
        'contractForm': '0px 4px 38px 0px rgba(0, 0, 0, 0.07)',
      },
      screens: {
        "2xl": "1600px",
      }
    },
  },
  plugins: [],
} satisfies Config;
