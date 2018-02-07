/* eslint-disable global-require */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
		name: 'development',
		entry: [
			'./src/index.js'
		],
		output: {
			path: 'public',
			filename: 'bundle.js'
		},
		devServer: {
			hot: true,
			contentBase: './public',
			publicPath: '/'
		},
		module: {
			loaders: [
				{
					test: /.js$|.jsx$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /.svg$|.jpg$/,
					loader: 'url-loader',
				},
			]
		},

	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html', inject: true }),
	],
};

module.exports = config;