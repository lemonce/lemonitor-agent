'use strict';

const config = module.exports = require('./webpack.base');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

config.plugins.push(new UglifyJSPlugin({
	parallel: true
}), new webpack.ProgressPlugin());