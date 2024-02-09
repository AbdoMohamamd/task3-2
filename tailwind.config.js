/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../../public/banner.jpg')",
        aboutUs: "url('../../public/aboutUs.jpg')",
        contactUs: "url('../../public/contactUs.jpg')"
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
