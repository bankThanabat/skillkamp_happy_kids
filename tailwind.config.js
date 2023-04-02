/* eslint-disable quote-props */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-main1': '#282828',
        'primary-main2': '#FFFFFF',
        'primary-main3': '#D2461C',
        'primary-main4': '#AFAFAF',
        'primary-main5': '#FFCDBE',
        'neutral-100': '#F8F9FA',
        'neutral-200': '#E9ECEF',
        'neutral-300': '#DEE2E6',
        'neutral-400': '#CED4DA',
        'neutral-500': '#ADB5BD',
        'neutral-600': '#6C757D',
        'neutral-700': '#495057',
        'neutral-800': '#343A40',
        'neutral-900': '#212529',
        white: '#FFFFFF',
        black: '#000000',
        active: 'CDECDE',
        expore: 'E8E9EB',
        alert: 'FF4040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
