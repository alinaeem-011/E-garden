/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
        lg: "0px",
      },
    },
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
      },
    },
  },
  plugins: [],
};
