'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		index: path.resolve(__dirname, '../agent/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/' 
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/\node_modules/]
			}
		]
	},
	plugins: [],
	node: false
};