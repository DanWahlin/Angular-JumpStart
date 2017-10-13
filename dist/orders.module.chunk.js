webpackJsonp(["orders.module"],{

/***/ "../../../../../src/app/orders/orders-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */] }
];
var OrdersRoutingModule = (function () {
    function OrdersRoutingModule() {
    }
    return OrdersRoutingModule;
}());
OrdersRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */]];
OrdersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], OrdersRoutingModule);

//# sourceMappingURL=orders-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;Orders\n            </h3>\n        </header>\n        <br />\n\n        <div class=\"container\">\n            <div *ngIf=\"customers\">\n\n                <div class=\"row\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n                    <h4>{{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n                    <br />\n                    <table *ngIf=\"customer.orders && customer.orders.length\" class=\"table table-striped table-hover orders-table\">\n                        <tr *ngFor=\"let order of customer.orders;trackBy:trackbyService.order\">\n                            <td>{{order.productName}}</td>\n                            <td class=\"text-right\">{{ order.itemCost | currency:'USD':true }}</td>    \n                        </tr>\n                        <tr class=\"summary-border\">\n                            <td>&nbsp;</td>\n                            <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':true }}\n                        </tr>\n                    </table>\n                    <div *ngIf=\"!customer.orders || !customer.orders.length\">\n                        No orders found\n                    </div> \n                </div>\n\n                <cm-pagination [hidden]=\"!customers\"\n                    [totalItems]=\"totalRecords\" \n                    [pageSize]=\"pageSize\" \n                    (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n\n            </div>\n            <div *ngIf=\"!customers\">\n                No customers found\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_trackby_service__ = __webpack_require__("../../../../../src/app/core/services/trackby.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getCustomersPage(1);
    };
    OrdersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    OrdersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.totalRecords = response.totalRecords;
            _this.customers = response.results;
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cm-customers-orders',
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_trackby_service__["a" /* TrackByService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_trackby_service__["a" /* TrackByService */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_routing_module__ = __webpack_require__("../../../../../src/app/orders/orders-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__orders_routing_module__["a" /* OrdersRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__orders_routing_module__["a" /* OrdersRoutingModule */].components]
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ })

});
//# sourceMappingURL=orders.module.chunk.js.map