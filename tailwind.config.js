/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-bg': "url('/public/bg-img.jpg')",
      },
      container: {
        center: true,
      },
      colors: {
        purpleBorder: "#482272",
        purpleBG: "#5B2B8F",
        greenButton: "#2C825B",
        greenButtonBorder: "#66AB8C",
      },
      textColor: {
        textGray: "#907070",
        purpleH1: "#8866AE",
        purpleH3: "#7B55A5",
      }
    },
  },
  plugins: [],
}
