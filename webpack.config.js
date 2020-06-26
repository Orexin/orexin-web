const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const importsloader = require('imports-loader');

module.exports = {
	mode: 'none',
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/dist'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
};