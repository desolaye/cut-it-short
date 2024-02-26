import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'x-secondary': '#F4F7F580',
        'x-main': '#F4F7F5',
        'x-white/20': '#F4F7F533',
        'x-black': '#0D0D0D',
        'x-gray': '#4E4E4E',
        'x-green': '#7BC600',
        'x-yellow': '#E7B70D',
        'x-red': '#DE2422',
      },
    },
  },
  plugins: [],
}
export default config
