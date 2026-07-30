import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#2563eb', rgb: '37,99,235' }, accent: { DEFAULT: '#1d4ed8', rgb: '29,78,216' } }, fontFamily: { heading: ['Plus Jakarta Sans', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;