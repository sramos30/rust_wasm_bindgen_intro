const path = require('path');
const { web } = require('webpack');

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},
	target: "web",
	experiments: {
	  asyncWebAssembly: true,
	  buildHttp: true,
	  executeModule: true,
	  layers: true,
	  lazyCompilation: true,
	  outputModule: true,
	  syncWebAssembly: true,
	  topLevelAwait: true,
	},
	mode: "development"
};
 