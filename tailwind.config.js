module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#181817",
      white: "#ffffff",
      grey: "#6f6f6f",
      yellow: "#f6d88c",
    },
    fontFamily: {
      body: ["Darker Grotesque", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      title: "100%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
