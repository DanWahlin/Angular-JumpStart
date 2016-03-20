## Unable to load http://localhost:[port]/angular2/http

Change System.config() to following (https://github.com/systemjs/systemjs/issues/434):

System.config({
  paths: {
    'angular2/*': 'node_modules/angular2/*.js',
    'rxjs/*': 'node_modules/rxjs/*.js'
  },
  defaultJSExtensions: true,
  packages: {app: {format: 'register', defaultExtension: 'js'}} 
});

## Get rid of defaultExtensions deprecated error

Convert to using packages (more work though). Example at https://github.com/systemjs/systemjs/issues/524.

System.config({
    packages: {
        '/src': {
            main: 'app',
            defaultExtension: 'js'
        },
        '/node_modules/rxjs': {
            main: 'index',
            defaultExtension: 'js'
        },
        '/node_modules/angular2': {
            main: 'angular2',
            defaultExtension: 'js',
            map: {
                'rxjs': '/node_modules/rxjs'
            }
        }
    },
    map: {
        angular2: '/node_modules/angular2',
        rxjs: '/node_modules/rxjs'
    }
});