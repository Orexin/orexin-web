const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

	devtool: 'source-map',

	entry: {
		main: './src/main.js'
	},

	output: {
		filename: '[name].[hash:20].js',
		path: buildPath
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
					MiniCssExtractPlugin.loader,
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			chunks: ['main'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/contact.html',
			inject: 'body',
			chunks: ['main'],
			filename: 'contact.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq/faq.html',
			inject: 'body',
			chunks: ['main'],
			filename: 'faq.html'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css"
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				map: {
					inline: false,
				},
				discardComments: {
					removeAll: true
				},
				discardUnused: false
			},
			canPrint: true
		})
	],

};