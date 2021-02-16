const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'source-map',

	entry: {
		main: './src/js/main.js',
		contact: './src/js/contact.js',
		faq: './src/js/faq.js',
		aboutTechnologies: './src/js/about-technologies.js'
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
				"style-loader",
				"css-loader"
				]
			},
			// load images (base64 < 8192B)
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][hash].[ext]'
				}
			},
			// load icons
			{
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			},
			// load testing "interface"
			{
				test: /\test\.(js$|css)/,
				use: 'mocha-loader',
				exclude: /node_modules/
			}
			// load svg
			/*{
				test: /\.svg$/,
				use: ["file-loader"]
			}*/
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
			template: './src/about.html',
			inject: true,
			chunks: ['main', 'aboutTechnologies'],
			filename: 'about.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/services.html',
			inject: true,
			chunks: ['main'],
			filename: 'services.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/contact.html',
			inject: true,
			chunks: ['main', 'contact'],
			filename: 'contact.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq/faq.html',
			inject: true,
			chunks: ['main', 'faq'],
			filename: 'faq.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq/annual-payment.html',
			inject: true,
			chunks: ['main'],
			filename: 'annual-payment.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq/web-rights-transfer.html',
			inject: true,
			chunks: ['main'],
			filename: 'web-rights-transfer.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/privacy.html',
			inject: true,
			chunks: ['main'],
			filename: 'privacy.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/terms-and-conditions.html',
			inject: true,
			chunks: ['main'],
			filename: 'terms-and-conditions.html'
		})
	],

};