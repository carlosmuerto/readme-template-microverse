const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
	entry: {
		index: './src/index.js',
	},
	mode: isDevelopment,
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],

	devtool: 'inline-source-map',

	devServer: {
		static: './dist',
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/to-do-list-webpack/',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	optimization: {
		runtimeChunk: 'single',
	},
	performance: {
		hints: true,
	},
};