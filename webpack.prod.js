const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const AppleTouchIconsPlugin = require('apple-touch-icons-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {

	devtool: 'source-map',

	resolve: {
		alias: {
			"@": path.resolve(__dirname, './src/'),
			"@components": path.resolve(__dirname, './src/components/'),
			"@img": path.resolve(__dirname, './src/img/'),
			"@css": path.resolve(__dirname, './src/css/'),
		}
	},

	entry: {
		main: '/src/js/main.js',
		article: '/src/js/article.js',
		// pages
		index: '/src/js/index.js',
		about: '/src/js/about.js',
		contact: '/src/js/contact.js',
		faq: '/src/js/faq.js',
		services: '/src/js/services.js',
		webpres: '/src/js/web-pres.js',
		webapp: '/src/js/web-app.js',
		ecommerce: '/src/js/ecommerce.js',
		partnership: '/src/js/partnership.js',
		console: '/src/js/console.js',
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
				test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			},
			// load testing "interface"
			{
				test: /\test\.(js$|css)/,
				use: 'mocha-loader',
				exclude: /node_modules/
			},
			// inline SVGs
			{
				test: /\.svg$/,
				use: 'html-loader'
			}
		],
	},

	plugins: [
		new CleanWebpackPlugin({}),
		/* INDEX */
		new HtmlWebpackPlugin({
			template: '/src/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* ABOUT */
		new HtmlWebpackPlugin({
			template: '/src/about.html',
			inject: true,
			chunks: ['main', 'about'],
			filename: 'about.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* CONTACT */
		new HtmlWebpackPlugin({
			template: '/src/contact.html',
			inject: true,
			chunks: ['main', 'contact'],
			filename: 'contact.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* FAQ */
		new HtmlWebpackPlugin({
			template: '/src/faq.html',
			inject: true,
			chunks: ['main', 'faq'],
			filename: 'faq.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* PRIVACY */
		new HtmlWebpackPlugin({
			template: '/src/privacy.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'privacy.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* TER.MS AND CONDITIONS */
		new HtmlWebpackPlugin({
			template: '/src/terms-and-conditions.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'terms-and-conditions.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		/* SERVICES */
		new HtmlWebpackPlugin({
			template: '/src/services.html',
			inject: true,
			chunks: ['main', 'services'],
			filename: 'services.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/ecommerce.html',
			inject: true,
			chunks: ['main', 'ecommerce'],
			filename: 'services/ecommerce.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/web-app.html',
			inject: true,
			chunks: ['main', 'webapp'],
			filename: 'services/web-app.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/web-pres.html',
			inject: true,
			chunks: ['main', 'webpres'],
			filename: 'services/web-pres.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
		new HtmlWebpackPlugin({
			template: '/src/partnership.html',
			inject: true,
			chunks: ['main', 'partnership'],
			filename: 'partnership.html'
		}),
		new HtmlWebpackPlugin({
			template: '/src/console.html',
			inject: true,
			chunks: ['main', 'console'],
			filename: 'console.html'
		}),
		new HtmlWebpackPlugin({
			template: '/src/404.html',
			inject: true,
			chunks: ['main'],
			filename: '404.html'
		}),
		// custom vars for relative paths
		new JsConfigPathsPlugin({
			configFileName: "jsconfig.json" 
		}),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true,
			maximumFileSizeToCacheInBytes: 5000000,
		}),
		new WebpackPwaManifest({
			filename: "manifest.json",
			publicPath: '/' ,
			name: 'Orexin Solutions s.r.o.',
			short_name: 'Orexin',
			start_url: '/index.html',
			description: 'Orexin Solutions progressive web app',
			background_color: '#310686',
			theme_color: '#4508bd',
			'theme-color': '#4508bd',
			display: 'standalone',
			crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
			icons: [
			  {
				src: path.resolve('src/img/AppIcon/icon-72x72.png'),
				size: '72x72'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-92x92.png'),
				size: '92x92'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-92x92.png'),
				size: '92x92',
				destination: path.join('icons', 'ios'),
				ios: true //ios support
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-92x92.png'),
				size: '92x92',
				destination: path.join('icons', 'ios'),
				ios: 'startup' //ios support
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-128x128.png'),
				size: '128x128'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-144x144.png'),
				size: '144x144'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-152x152.png'),
				size: '152x152'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-192x192.png'),
				size: '192x192',
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-192x192.png'),
				size: '192x192',
				purpose: 'any maskable' // default
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-384x384.png'),
				size: '384x384'
			  },
			  {
				src: path.resolve('src/img/AppIcon/icon-512x512.png'),
				size: '512x512'
			  }
			]
		}),
		new AppleTouchIconsPlugin({
			icon: "src/img/AppIcon/icon-92x92.png",
			ipad: "src/img/AppIcon/icon-92x92.png",
			resize: "crop"
		}),
	],
	output: {
		filename: '[name].[contenthash].js',
		 path: path.resolve(__dirname, 'dist'),
	},
};