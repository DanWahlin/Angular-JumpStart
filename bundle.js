var SystemBuilder = require('systemjs-builder');
var argv = require('yargs').argv;

var sourceDirName = 'src';
var sourcePath = './' + sourceDirName;

var builder = new SystemBuilder(sourcePath, sourcePath +  "/systemjs.config.js");

var outputFile = argv.prod ? './dist/bundle.min.js' : './dist/bundle.js';

// The systemJS config is in `./src` and uses `node_modules` as if it's relative to it
//		which works in lite-server because it shows `./` and `./src` as the same folder
//		(see bs-config.json)
//
// In bundle though, the builder thinks that `node_modules` is relative to `./src`,
//		not to `./`, which we need to correct by removing `src/` from path.
builder.bundle('node_modules/*', {
	fetch: function (load, fetch) {
		load.address =
			load.address.replace(sourceDirName + "/node_modules", "node_modules");

		return fetch(load);
	}
});

builder.buildStatic('app', outputFile, {
	minify: argv.prod,
	mangle: argv.prod,
	rollup: argv.prod,
	// Keeps URLs in components' `templateUrl` relative to component path
	// See more at http://stackoverflow.com/a/37537725/146656
	encodeNames: false
});