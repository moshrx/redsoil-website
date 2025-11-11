/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#b11226", // red-soil vibe (easy to change later)
          dark:    "#111827",
          light:   "#f9fafb",
        },
      },
      fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
            heading: ["Poppins", "system-ui", "sans-serif"],
      },
      // nice, soft container width
      maxWidth: {
        content: "1120px",
      }
    },
  },
  plugins: [],
};
