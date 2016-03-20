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