const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const scssRules = {
  test: /\.css$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
        sassOptions: {
          fiber: false,
        },
      },
    }
  ],
  
};


module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack Project',
    template: 'src/index.html'
  })],
  module: {
    rules: [scssRules],
  },

};