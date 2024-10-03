/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        banger: ["Bangers", "system-ui"],
      },
      colors: {
        "orange-start": "#ff7e5f",
        "orange-end": "#feb47b",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(45deg, #ff7e5f, #feb47b)",
      },
      boxShadow: {
        "gradient-glow":
          "0 0 15px rgba(66, 153, 225, 0.5), 0 0 30px rgba(66, 153, 225, 0.3), 0 0 45px rgba(66, 153, 225, 0.2)",
        "gradient-glow-2":
          "0 0 15px rgba(102, 255, 102, 0.5), 0 0 30px rgba(102, 255, 102, 0.3), 0 0 45px rgba(102, 255, 102, 0.2)",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
