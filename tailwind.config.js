/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondery: "#6366F1",
        accent: "#22D3EE",
        primaryBg: "#0A0F1E",
        darkBackground: "#0A0F1E",
        darkText: "#F1F5F9",
        cardBg: "#0F172A",
        navyDark: "#060B18",
        slateCard: "#111827",
      },
      fontFamily: {
        bangla: ["'Hind Siliguri'", "sans-serif"],
        display: ["'Inter'", "'Hind Siliguri'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0A0F1E 0%, #0F172A 50%, #0C1A3A 100%)",
        "gradient-primary": "linear-gradient(135deg, #0EA5E9, #6366F1)",
        "gradient-accent": "linear-gradient(135deg, #22D3EE, #0EA5E9)",
        "gradient-card": "linear-gradient(135deg, #0F172A, #1E293B)",
        "gradient-cta": "linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #22D3EE 100%)",
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
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: 0, transform: "translateX(30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "count-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulse_glow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-left": "fade-in-left 0.8s ease-out",
        "fade-in-right": "fade-in-right 0.8s ease-out",
        upDown: "upDown 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 7s infinite",
        float: "float 3s ease-in-out infinite",
        "count-up": "count-up 0.6s ease-out",
        pulse_glow: "pulse_glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 165, 233, 0.4)",
        "glow-lg": "0 0 60px rgba(14, 165, 233, 0.3)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 48px rgba(14, 165, 233, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
