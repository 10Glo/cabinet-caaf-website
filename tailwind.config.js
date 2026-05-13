/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#faf9f5",
        primary: {
          DEFAULT: "#259E01",
          active: "#1d7d01",
        },
        brand: {
          navy: "#014065",
        },
        surface: {
          card: "#efe9de",
          soft: "#f5f0e8",
          dark: "#014065",
        },
        ink: "#141413",
        hairline: "#e6dfd8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      spacing: {
        section: '4rem',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
      },
    },
  },
  plugins: [],
};