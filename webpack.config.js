const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./css/app.scss'],
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: [ /\.scss$/, /\.css$/i ],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/build.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};