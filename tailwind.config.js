import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/images/header-back.png')",
        'paralax': "url('/images/section 9/image-1.png')",
      },
      fontFamily: {
        iransans: ['"iransans"'],
        iransanslight:['"iransanslight"']
      },
    },
  },
  plugins: [],
};
