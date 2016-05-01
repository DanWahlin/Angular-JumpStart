(function() {
	System.config({
		map: {
			'rxjs': '/node_modules/rxjs',
			'@angular': '/node_modules/@angular',
			'app': 'app' //'dist'
		},
		packages: {
			'app': {
				main: 'main',
				defaultExtension: 'js'
			},
			'app/+customer': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/core': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/compiler': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/common': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/platform-browser': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/platform-browser-dynamic': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/http': {
				main: 'index',
				defaultExtension: 'js'
			},
			'@angular/router': {
				main: 'index',
				defaultExtension: 'js'
			},
			'rxjs': {
				defaultExtension: 'js'
			}
		}
	});
})();

/*
Could use reduce() to minimize duplication but keeping it simple here
	var packages = [
			'@angular/core',
		 	'@angular/compiler',
			'@angular/common',
			'@angular/platform-browser',
			'@angular/platform-browser-dynamic',
			'@angular/http',
			'@angular/router'
	].reduce(function(ngPackage, packageName) {
	  //ngPackage = {} when it's first called. We then dynamically 
	  //add packageName to it as a new property & apply the settings
		//That creates the packages object nice and cleanly
		ngPackage[packageName] = {
			main: 'index.js',
			defaultExtension: 'js'
		}
		return ngPackage;
	}, {});
	
	packages.app = { main: 'main.js', defaultExtension: 'js'};
	packages.rxjs = { defaultExtension: 'js' };
*/