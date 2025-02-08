import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Looks for classes in the pages directory
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", // Looks for classes in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Looks for classes in the app directory
  ],
  theme: {
    extend: {
      colors: {
        background:"white",
        foreground: "var(--foreground)", // Custom foreground color using CSS variables
      },
    },
  },
  plugins: [], // You can add Tailwind plugins here if needed
} satisfies Config;
