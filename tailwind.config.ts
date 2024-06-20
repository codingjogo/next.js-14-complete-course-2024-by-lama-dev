import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'mobile': '300px',
        // => @media (min-width: 300px) { ... }
      'tablet': '425px',
      // => @media (min-width: 481px) { ... }

      'laptop': '768px',
      // => @media (min-width: 769px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1025px) { ... }
    },
    extend: {
      colors: {
        'primary': '#3c2daf', // needs to stand out
        'secondary': '#634fff', // to stand out colors good for buttons
      }
    },
  },
  plugins: [],
};
export default config;
