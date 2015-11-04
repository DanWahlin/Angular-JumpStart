var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var customers_component_1 = require('../customers/customers-component');
var orders_component_1 = require('../orders/orders-component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Customers', component: customers_component_1.CustomersComponent },
            { path: '/orders/:id', as: 'Orders', component: orders_component_1.OrdersComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-component.js.map