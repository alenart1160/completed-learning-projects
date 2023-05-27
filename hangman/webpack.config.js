const path = require('path')

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'public/scripts'),
		filename: 'bundle.js',
		publicPath: '/scripts/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	devServer: {
		port: 3000,
		static: './public/',
	},
	devtool: 'source-map',
}
