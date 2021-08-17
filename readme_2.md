## [Installing Rust nightly](https://www.oreilly.com/library/view/rust-programming-by/9781788390637/e07dc768-de29-482e-804b-0274b4bef418.xhtml) 
1. rustup default nightly 
    > If you want to go back to the stable version, issue the following command: rustup default stable
2. rustup target add wasm32-unknown-unknown
3. cargo install wasm-bindgen-cli 
	> Attention to the version number (wasm-bindgen = "0.2.75")
4. cargo new wasm_example --lib

### open Cargo.toml and insert:
```
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.75"
```

- cargo update
- cargo build --target wasm32-unknown-unknown
    > to uptimize the webassembly code
- wasm-bindgen target/wasm32-unknown-unknown/debug/wasm_example.wasm --out-dir ./

- create files
```
src/index.js
============
const rust = import('./wasm_example')

rust.then(func => {
	func.create_stuff()
	func.run_alert("Javascript")
})


package.json
============
{
	"scripts": {
		"serve": "webpack-dev-server"
	},
	"devDependencies": {
	}
}

webpack.dev.js
=================
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
 
src/index.html
==============
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rust Wasm Example</title>
</head>
<body>
    <script src="./index.js"></script>

</body>
</html>
```

add last verstions in devDependencies
=====================================
- yarn add -D webpack 
- yarn add -D webpack-cli 
- yarn add -D webpack-dev-server
- yarn serve
