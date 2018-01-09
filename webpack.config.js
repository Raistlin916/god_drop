const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    libraryTarget: 'umd'
  }
};
