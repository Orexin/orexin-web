const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		main: './src/js/main.js',
		article: './src/js/article.js',
		// pages
		index: './src/js/index.js',
		about: './src/js/about.js',
		contact: './src/js/contact.js',
		faq: './src/js/faq.js',
		services: './src/js/services.js',
		webpres: './src/js/webPres.js'
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
				'style-loader',
				'css-loader'
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
				test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			},
			// load testing "interface"
			{
				test: /\test\.(js$|css)/,
				use: 'mocha-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				use: 'html-loader'
			}
		]
	},

	plugins: [
		/* INDEX */
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html'
		}),
		/* ABOUT */
		new HtmlWebpackPlugin({
			template: './src/about.html',
			inject: true,
			chunks: ['main', 'about'],
			filename: 'about.html'
		}),
		/* CONTACT */
		new HtmlWebpackPlugin({
			template: './src/contact.html',
			inject: true,
			chunks: ['main', 'contact'],
			filename: 'contact.html'
		}),
		/* FAQ */
		new HtmlWebpackPlugin({
			template: './src/faq.html',
			inject: true,
			chunks: ['main', 'faq'],
			filename: 'faq.html'
		}),
		/* PRIVACY */
		new HtmlWebpackPlugin({
			template: './src/privacy.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'privacy.html'
		}),
		/* TERMS AND CONDITIONS */
		new HtmlWebpackPlugin({
			template: './src/terms-and-conditions.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'terms-and-conditions.html'
		}),
		/* SERVICES */
		new HtmlWebpackPlugin({
			template: './src/services.html',
			inject: true,
			chunks: ['main', 'services'],
			filename: 'services.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/services/ecommerce.html',
			inject: true,
			chunks: ['main', 'services'],
			filename: 'ecommerce.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/services/web-app.html',
			inject: true,
			chunks: ['main', 'services'],
			filename: 'web-app.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/services/web-pres.html',
			inject: true,
			chunks: ['main', 'services', 'webpres'],
			filename: 'web-pres.html'
		}),
	]
};