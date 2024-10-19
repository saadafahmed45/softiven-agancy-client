/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // primary: "#29ABE2",
        // secondery: "#004AAD",
        primary: "#004AAD",
        secondery: "#29ABE2",
        primaryBg: "#fff",
        darkBackground: "#1F2937",
        darkText: "#F3F4F6",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-in-left": "fade-in-left 1s ease-out",
        upDown: "upDown 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
