const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		main: './src/main.js'
	},

	devServer: {
		port: 6969,
		contentBase: buildPath
	},

	module: {
		rules: [
			// load JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			// load CSS
			{
				test: /\.css$/,
				use: [
				"style-loader",
				"css-loader"
				]
			},
			// load images (base64 < 8192B)
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						name: '[path][name].[ext]?hash=[hash:20]',
						limit: 8192
					}
				}]
			},
			// load svg
			{
				test: /\.svg$/,
				use: ["file-loader"]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
			chunks: ['main'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/contact.html',
			inject: true,
			chunks: ['main'],
			filename: 'contact.html'
		})
	]
};