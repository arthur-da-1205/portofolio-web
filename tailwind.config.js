module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },

      screens: {
        sm: "360px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
