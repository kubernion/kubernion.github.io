/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the v4 specific plugin
    autoprefixer: {},
  },
};

export default config;