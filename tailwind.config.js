/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/Hero.jpg')",
      },
      fontFamily: {
<<<<<<< HEAD
        body: ["'Anton'", "sans-serif"],
=======
        body: ["'Anton'"],
        display: ["'Array'"],
>>>>>>> 4e1e15451a95720c23f76d70bdde337c4a06bcc4
      },
      colors: {
        primary: ["#6C1D12"],
      },
    },
  },
  plugins: [],
};
