/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        "slider-height": "300px", 
      },
      fontFamily: {
        myfont: ["MyFont", "sans-serif"],
      },
      colors: {
        "custom-red": "rgb(223, 49, 78)",
      },
      boxShadow: {
        "bottom-only": "0 -20px 4px rgba(255,255, 255, 0.8)",
      },
    },
  },
  plugins: [],
  safelist: [
    "swiper",
    "swiper-wrapper",
    "swiper-slide",
    "swiper-button-next",
    "swiper-button-prev",
    "swiper-pagination",
  ],
  important: true,
};
