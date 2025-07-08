/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Bahij Insan", "sans-serif"],
        english: ["Gucina", "sans-serif"],
      },
      colors: {
        purpleColor: "#A56FCC",
        mainColor: "#3D2571",
        whiteColor: "#FFFFFF",
        darkMainColor: "#000C40",
        darkPurpleColor: "#994ECC",
        babyBlueColor: "#00F9FF",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #6642AB 0%, #C292E3 100%)",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [],
};
