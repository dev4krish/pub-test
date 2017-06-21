
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
devServer: {
      inline: true,
      port: 3000
   },

  module: {
    rules: [
      {
      
test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['es2015']
    }
},
      // Loaders for other file types can go here

    {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize=1&modules=true&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]&camelCase',
                    'postcss-loader?sourceMap=inline'
                ]
            })
        }, 
    ],
  },
  
plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]
};
