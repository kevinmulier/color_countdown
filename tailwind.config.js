/*eslint-env node*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  safelist: [
    'bg-[#FF0000]',
    'bg-[#0000FF]',
    'bg-[#008000]',
    'bg-[#000000]',
    'bg-[#800080]',
  ],
};
