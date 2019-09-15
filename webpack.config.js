const path = require('path');
const { NODE_ENV = 'production' } = process.env;

console.log(`-- Webpack <${NODE_ENV}> build --`);

module.exports = {
  entry: './src/main.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{ test: /\.ts$/, use: ['ts-loader'] }]
  },
  stats: {
    // Hide noisy warnings
    warningsFilter: ['node_modules/express/lib/view.js', warning => false]
  }
};
