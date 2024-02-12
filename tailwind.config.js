/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../../public/images/banner.jpg')",
        aboutUs: "url('../../public/images/aboutUs.jpg')",
        contactUs: "url('../../public/images/contactUs.jpg')",
        slide1: "url('../../public/images/slide1.jpg')",
        slide2: "url('../../public/images/slide2.jpg')",
        slide3: "url('../../public/images/slide3.jpg')"
      },
      width: {
        100: '70em',
        99: '45em'
      },
      boxShadow: {
        top: ' inset 0 4px 4px 0 rgb(0 0 0 / 0.05)'
      }
    }
  },
  plugins: []
}
