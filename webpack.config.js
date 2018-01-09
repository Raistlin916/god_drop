const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'engine': path.resolve(__dirname, './src/engine')
    }
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, '.')
  }
};
