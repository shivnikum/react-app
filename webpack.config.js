var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: __dirname, 
    	filename: 'build/bundle.js' ,
    	sourceMapFilename: "app.js.map",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_module/,
				query: {
					presets: ['es2015', 'react']
				}
			}
			
		]
	},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    devtool: 'inline-source-map'



};
