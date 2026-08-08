/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1E5B9C',
        'brand-orange': '#F47A1F',
        'brand-magenta': '#C2185B',
        'neutral': {
          50: '#FFFFFF',
          100: '#F6F7F9',
          200: '#E5E7EB',
          700: '#4B5563',
          800: '#1F2933',
          900: '#6B7280',
        }
      },
    },
  },
  plugins: [],
};
