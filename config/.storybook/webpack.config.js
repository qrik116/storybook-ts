const path = require("path");
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (baseConfig, env, config /* Storybook 4 default config */) => {
	const tsLoader = {
		test: /\.(t|j)sx?$/,
		include: path.resolve('src'),
		exclude: /node_modules/,
		use: [
			{ loader: 'babel-loader' },
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true // HMR doesn't work without this
				},
			}
		],
	};

	if (process.env.DOCGEN) {
		tsLoader.use.push({ loader: 'react-docgen-typescript-loader' })
	}
	config.resolve.modules.push(path.resolve('src'));
	config.module.rules[0].exclude = /node_modules/;
	config.output = {
		...config.output,
		globalObject: 'this'
	};
	config.module.rules.push(
		tsLoader,
		{
			test: /\.scss$/,
			use: [
				{ loader: 'style-loader' },
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						importLoaders: 1
					},
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						includePaths: [path.resolve('node_modules')],
					},
				},
			],
		},
	);

	config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js', '.json', '.scss', '.css');
	config.devServer = {
		stats: {
			// copied from `'minimal'`
			all: false,
			modules: false,
			maxModules: 0,
			errors: true,
			warnings: true,
			// our additional options
			moduleTrace: false,
			errorDetails: false,
			chunks: false
		}
	},
	config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
			tslint: path.resolve('tslint.json'),
			tsconfig: path.resolve('tsconfig.json'),
			checkSyntacticErrors: true
        }),
        new webpack.WatchIgnorePlugin([
            /\.d\.ts$/,
		]),
	);

	if (process.env.BROWSERSYNC) {
		config.plugins.push(
			new BrowserSyncPlugin(
				// BrowserSync options
				{
					// browse to http://localhost:3000/ during development
					host: 'localhost',
					port: 9010,
					// proxy the Webpack Dev Server endpoint
					// (which should be serving on http://localhost:3100/)
					// through BrowserSync
					proxy: 'http://localhost:9009/',
					notify: false,
					open: true
				},
				// plugin options
				{
					// prevent BrowserSync from reloading the page
					// and let Webpack Dev Server take care of this
					reload: false
				}
			)
		)
	}
	
	config.optimization.minimizer = [
		new TerserPlugin({
			cache: true,
			sourceMap: false,
			parallel: false,
			terserOptions: {
				mangle: false,
			}
		}),
	];

	return config;
};
