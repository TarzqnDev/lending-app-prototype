/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#3B35E6',
        accent: '#E8EAF6',
        neutral: '#0F172A'
      },
      
      fontFamily: {
        poppinsBold: ['Poppins-Bold'],
        poppinsSemiBold: ['Poppins-SemiBold'],
        poppinsMedium: ['Poppins-Medium'],
        robotoMedium: ['Roboto-Medium'],
        robotoRegular: ['Roboto-Regular'],
        robotoLight: ['Roboto-Light'],
      }
    },
  },
  plugins: [],
}