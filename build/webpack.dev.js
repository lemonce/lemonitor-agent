'use strict';

const config = module.exports = require('./webpack.base');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

config.devServer = {
	contentBase: path.resolve(__dirname, '../dist'),
	proxy: {
		'/api': 'http://localhost:2000'
	}
};

config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'HTTP_PORT': 8200,
		'HTTPS_PORT': 443,
		'HOSTNAME': '"localhost"'
	}
}));

config.plugins.push(new HtmlWebpackPlugin({
	title: 'mainPage',
	filename: 'index.html',
	template: path.resolve(__dirname, './index.html')
}));