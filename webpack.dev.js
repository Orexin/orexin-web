const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const AppleTouchIconsPlugin = require('apple-touch-icons-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {

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
		ecommerce: '/src/js/ecommerce.js'
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
			// inline SVGs
			{
				test: /\.svg$/,
				use: 'html-loader'
			}
		]
	},

	plugins: [
		/* INDEX */
		new HtmlWebpackPlugin({
			template: '/src/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html'
		}),
		/* ABOUT */
		new HtmlWebpackPlugin({
			template: '/src/about.html',
			inject: true,
			chunks: ['main', 'about'],
			filename: 'about.html'
		}),
		/* CONTACT */
		new HtmlWebpackPlugin({
			template: '/src/contact.html',
			inject: true,
			chunks: ['main', 'contact'],
			filename: 'contact.html'
		}),
		/* FAQ */
		new HtmlWebpackPlugin({
			template: '/src/faq.html',
			inject: true,
			chunks: ['main', 'faq'],
			filename: 'faq.html'
		}),
		/* PRIVACY */
		new HtmlWebpackPlugin({
			template: '/src/privacy.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'privacy.html'
		}),
		/* TERMS AND CONDITIONS */
		new HtmlWebpackPlugin({
			template: '/src/terms-and-conditions.html',
			inject: true,
			chunks: ['main', 'article'],
			filename: 'terms-and-conditions.html'
		}),
		/* SERVICES */
		new HtmlWebpackPlugin({
			template: '/src/services.html',
			inject: true,
			chunks: ['main', 'services'],
			filename: 'services.html'
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/ecommerce.html',
			inject: true,
			chunks: ['main', 'ecommerce'],
			filename: 'services/ecommerce.html'
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/web-app.html',
			inject: true,
			chunks: ['main', 'webapp'],
			filename: 'services/web-app.html'
		}),
		new HtmlWebpackPlugin({
			template: '/src/services/web-pres.html',
			inject: true,
			chunks: ['main', 'webpres'],
			filename: 'services/web-pres.html'
		}),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true,
		}),
		new WebpackPwaManifest({
			filename: "manifest.json",
			publicPath: '/' ,
			name: 'Orexin Solutions s.r.o.',
			short_name: 'Orexin',
			start_url: '/index.html',
			description: 'Orexin Solutions App',
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
		})
/* 		new WebpackManifestPlugin({
			"name": "Orexin Solutions s.r.o.",
			"short_name": "Orexin",
			"start_url": "/src/index.html",
			"description": "Orexin Solutions App",
			"background_color": "#310686",
			"theme_color": "#4508bd",
			"display": "standalone",
			"crossorigin": "use-credentials",
			"icons": [
			{
				"src": "/src/img/icons/icon-72x72.png",
				"type": "image/png",
				"sizes": "72x72"
			  },
			  {
				"src": "/src/img/icons/icon-96x96.png",
				"type": "image/png",
				"sizes": "96x96"
			  },
			  {
				"src": "/src/img/icons/icon-128x128.png",
				"type": "image/png",
				"sizes": "128x128"
			  },
			  {
				"src": "/src/img/icons/icon-144x144.png",
				"type": "image/png",
				"sizes": "144x144"
			  },
			  {
				"src": "/src/img/icons/icon-152x152.png",
				"type": "image/png",
				"sizes": "152x152"
			  },
			  {
				"src": "/src/img/icons/icon-192x192.png",
				"type": "image/png",
				"sizes": "192x192"
			  },
			  {
				"src": "/src/img/icons/maskable_icon.png",
				"type": "image/png",
				"sizes": "192x192",
				"purpose": "any maskable"
			  },
			  {
				"src": "/src/img/icons/icon-384x384.png",
				"type": "image/png",
				"sizes": "384x384"
			  },
			  {
				"src": "./src/img/icons/icon-512x512.png",
				"type": "image/png",
				"sizes": "512x512"
			  }
			]
		}), */
	]
};