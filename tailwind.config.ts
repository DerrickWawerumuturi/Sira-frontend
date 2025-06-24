module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "dot-flash": {
          "0%, 80%, 100%": { opacity: "0", transform: "translateY(0)" },
          "40%": { opacity: "1", transform: "translateY(-6px)" },
        },
      },
      animation: {
        "typing-dot": "dot-flash 1.4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
