/* craco.config.js */
const path = require('path');

console.log(path.resolve(__dirname, 'src/common'));
module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    alias: {
      '@/common': path.resolve(__dirname, 'src/common'),
      '@/app': path.resolve(__dirname, 'src/app'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      'inline-react-svg',
      '@babel/plugin-proposal-class-properties',
    ],
  },
  eslint: {
    mode: 'file',
    loaderOptions: () => ({
      overrides: path.resolve(__dirname, '.eslintrc'),
    }),
  },

};
