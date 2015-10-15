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
var data_service_1 = require('../../services/data-service');
var OrdersComponent = (function () {
    function OrdersComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Orders';
    }
    OrdersComponent.prototype.onInit = function () {
        //Load orders here (hard-coded for now)
    };
    OrdersComponent = __decorate([
        angular2_1.Component({
            selector: 'orders',
            providers: [data_service_1.DataService],
            templateUrl: 'app/components/orders/orders-component.html',
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], OrdersComponent);
    return OrdersComponent;
})();
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders-component.js.map