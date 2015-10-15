var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./components/app/app-component');
angular2_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=bootstrap.js.map