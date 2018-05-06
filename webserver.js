const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const PORT = 8000;


const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
	historyApiFallback: true,
	compress: true,
	inline: true,
	hot: true,
	disableHostCheck: true,
});


server.listen(PORT, () => console.log(
	`Webpack Dev Server is now running on http://localhost:${PORT}/`
));