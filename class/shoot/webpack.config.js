//var path = require('path')
var webpack = require("webpack");

//var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
//var phaser = path.join(phaserModule, 'build/phaser.min.js')

module.exports = {
	devtool: "source-map",
	entry: __dirname+"/states/index.js",
	output: {
		path: __dirname+"/build",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	devServer: {
		contentBase: "./",
		port: "45123",
		inline: true,
		historyApiFallback: true
	},

	plugins: [

	],
	/*
	resolve: {
	    alias: {
	      'phaser': phaser
	    }
  	}
  	*/
}