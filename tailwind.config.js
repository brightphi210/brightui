// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}', // Include Storybook files if they are outside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
