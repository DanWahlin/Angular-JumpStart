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
			},
			'@angular/core': {
				main: 'index'
			},
			'@angular/compiler': {
				main: 'index'
			},
			'@angular/common': {
				main: 'index'
			},
			'@angular/platform-browser': {
				main: 'index'
			},
			'@angular/platform-browser-dynamic': {
				main: 'index'
			},
			'@angular/http': {
				main: 'index'
			},
			'@angular/router': {
				main: 'index'
			},
			'rxjs': {
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
			main: 'index'
		}
		return ngPackage;
	}, {});
	
	packages.app = { main: 'ma};
	packages.rxjs };
*/