var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


var config = {
	node: {
	   fs: 'empty',
	   tls: 'empty',
	   net: 'empty'
	},
  entry: './src/main.js',
  output: {
		path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'app.js',
		sourceMapFilename: '[name].map'
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
	plugins: [
		new webpack.DefinePlugin({
	  	'process.env': JSON.stringify(process.env)
		}),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: 'index.html' }
		]),
	],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ],
  },
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
				new UglifyJSPlugin({
					uglifyOptions: {
						sourceMap: true,						
			      mangle: {
							safari10: true
			      }
			    }
			  })
    )
		config.devtool = 'source-map';
		config.devServer = {
			historyApiFallback:{
        index:'/index.html'
      },
			disableHostCheck: true
    };

} else {

		config.devtool = 'eval';
    config.devServer = {
			historyApiFallback:{
        index:'/index.html'
      },
			disableHostCheck: true
    };


}

module.exports = config;
