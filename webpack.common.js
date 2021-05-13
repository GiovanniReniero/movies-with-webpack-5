const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
       template:"./src/template.html",
     }),
   ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  }, 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
