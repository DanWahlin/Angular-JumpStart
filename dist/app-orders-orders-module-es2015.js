(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;Orders\n            </h3>\n        </header>\n        <br />\n\n        <div class=\"container\">\n            <div *ngIf=\"customers\">\n\n                <div class=\"row\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n                    <h4>{{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n                    <br />\n                    <table *ngIf=\"customer.orders && customer.orders.length\" class=\"table table-striped table-hover orders-table\">\n                        <tr *ngFor=\"let order of customer.orders;trackBy:trackbyService.order\">\n                            <td>{{order.productName}}</td>\n                            <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n                        </tr>\n                        <tr class=\"summary-border\">\n                            <td>&nbsp;</td>\n                            <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}\n                        </tr>\n                    </table>\n                    <div *ngIf=\"!customer.orders || !customer.orders.length\">\n                        No orders found\n                    </div> \n                </div>\n\n                <cm-pagination [hidden]=\"!customers\"\n                    [totalItems]=\"totalRecords\" \n                    [pageSize]=\"pageSize\" \n                    (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n\n            </div>\n            <div *ngIf=\"!customers\">\n                No customers found\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");




const routes = [
    { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] }
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule.components = [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]];
OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrdersRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");




let OrdersComponent = class OrdersComponent {
    constructor(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.getCustomersPage(1);
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.totalRecords = response.totalRecords;
            this.customers = response.results;
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-customers-orders',
        template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"]])
], OrdersComponent);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");




let OrdersModule = class OrdersModule {
};
OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"]],
        declarations: [_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"].components]
    })
], OrdersModule);



/***/ })

}]);
//# sourceMappingURL=app-orders-orders-module-es2015.js.map