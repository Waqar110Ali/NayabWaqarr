/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",      // Tafsol blue
        dark: "#0f172a",         // Dark navy
        text: "#334155",         // Body text
        muted: "#64748b",        // Muted text
        light: "#f8fafc",        // Light background
        border: "#e5e7eb",       // Borders
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)",
        soft: "0 4px 14px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
