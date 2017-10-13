webpackJsonp(["customers.module"],{

/***/ "../../../../../src/app/customers/customers-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container {\n    width:85%;\n}\n\n.card {\n    background-color:#fff;\n    border: 1px solid #d4d4d4;\n    height:120px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.card-header {\n    background-color:#027FF4;\n    font-size:14pt;\n    color:white;\n    padding:5px;\n    width:100%;\n}\n\n.card-close {\n    color: white;\n    font-weight:bold;\n    margin-right:5px;\n}\n\n.card-body {\n    padding-left: 5px;\n}\n\n.card-body-left {\n    margin-top: -5px;\n}\n\n.card-body-right {\n    margin-left: 20px;\n    margin-top: 2px;\n}\n\n.card-body-content {\n    width: 100px;\n}\n\n.card-image {\n    height:50px;width:50px;margin-top:10px;\n}\n\n.white {\n    color: white;\n}\n\n.white:hover {\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/customers-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row card-container\">\n        <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <a [routerLink]=\"['/customers',customer.id,'details']\" class=\"white\">\n                        {{customer.firstName | capitalize }} {{ customer.lastName | capitalize }} \n                    </a>\n                    <a [routerLink]=\"['/customers',customer.id,'edit']\">\n                        <i title=\"Edit\"  \n                           class=\"pull-right glyphicon glyphicon-edit edit-icon white\"></i>\n                    </a>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"clearfix\">\n                        <div class=\"pull-left card-body-left\">\n                            <a href=\"#\" class=\"white\">\n                                <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"card-image\" />\n                            </a>\n                        </div>\n                        <div class=\"pull-left card-body-right\">\n                            <div class=\"card-body-content\">{{customer.city | trim }}, {{customer.state.name}}</div>\n                            <a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!customers.length\">\n            No Records Found\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customers/customers-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_trackby_service__ = __webpack_require__("../../../../../src/app/core/services/trackby.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersCardComponent = (function () {
    function CustomersCardComponent(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersCardComponent.prototype.ngOnInit = function () {
    };
    return CustomersCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CustomersCardComponent.prototype, "customers", void 0);
CustomersCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cm-customers-card',
        template: __webpack_require__("../../../../../src/app/customers/customers-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customers/customers-card.component.css")],
        //Add [@flyInOut]="'in'" into template on card
        // animations: [
        //   trigger('flyInOut', [
        //     state('in', style({transform: 'translateX(0)', opacity: 1})),
        //     transition('void => *', [
        //       style({transform: 'translateX(25%)', opacity: 0}),
        //       animate(300)
        //     ]),
        //     transition('* => void', [
        //       animate(300, style({transform: 'translateX(-25%)', opacity: 1}))
        //     ])
        //   ])
        // ],
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_trackby_service__["a" /* TrackByService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_trackby_service__["a" /* TrackByService */]) === "function" && _a || Object])
], CustomersCardComponent);

var _a;
//# sourceMappingURL=customers-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/customers/customers-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-container  div {\n    padding-left: 0px;\n}\n\n.grid-container td {\n    vertical-align: middle;\n}\n\n.grid-image {\n    height:50px;width:50px;margin-top:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/customers-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row grid-container\">\n        <div class=\"col-md-10\">\n            <div class=\"table\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>&nbsp;</th>\n                            <th cm-sort-by=\"firstName\" (sorted)=\"sort($event)\">First Name</th>\n                            <th cm-sort-by=\"lastName\" (sorted)=\"sort($event)\">Last Name</th>\n                            <th cm-sort-by=\"address\" (sorted)=\"sort($event)\">Address</th>\n                            <th cm-sort-by=\"city\" (sorted)=\"sort($event)\">City</th>\n                            <th cm-sort-by=\"state.name\" (sorted)=\"sort($event)\">State</th>\n                            <!-- Or you can do this directly rather than using sort-by directive -->\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\n                            <th>&nbsp;</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n                            <td><img src=\"assets/images/{{ customer.gender | lowercase }}.png\"\n                                    class=\"grid-image\" alt=\"Customer Image\" /></td>\n                            <td><a [routerLink]=\"['/customers',customer.id,'details']\">{{ customer.firstName | capitalize }}</a></td>\n                            <td>{{ customer.lastName | capitalize }}</td>\n                            <td>{{ customer.address }}</td>\n                            <td>{{ customer.city | trim }}</td>\n                            <td>{{ customer.state.name }}</td>\n                            <td>{{ customer.orderTotal | currency:'USD':true }}</td>\n                            <td><a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a></td>\n                        </tr>\n                        <tr *ngIf=\"!customers.length\">\n                            <td>&nbsp;</td>\n                            <td colspan=\"7\">No Records Found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customers/customers-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_sorter_service__ = __webpack_require__("../../../../../src/app/core/services/sorter.service.ts");
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



var CustomersGridComponent = (function () {
    function CustomersGridComponent(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.customers, prop);
    };
    return CustomersGridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cm-customers-grid',
        template: __webpack_require__("../../../../../src/app/customers/customers-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customers/customers-grid.component.css")],
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_sorter_service__["a" /* SorterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_sorter_service__["a" /* SorterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_trackby_service__["a" /* TrackByService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_trackby_service__["a" /* TrackByService */]) === "function" && _b || Object])
], CustomersGridComponent);

var _a, _b;
//# sourceMappingURL=customers-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/customers/customers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customers_card_component__ = __webpack_require__("../../../../../src/app/customers/customers-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_grid_component__ = __webpack_require__("../../../../../src/app/customers/customers-grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__customers_component__["a" /* CustomersComponent */] }
];
var CustomersRoutingModule = (function () {
    function CustomersRoutingModule() {
    }
    return CustomersRoutingModule;
}());
CustomersRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__customers_component__["a" /* CustomersComponent */], __WEBPACK_IMPORTED_MODULE_3__customers_card_component__["a" /* CustomersCardComponent */], __WEBPACK_IMPORTED_MODULE_4__customers_grid_component__["a" /* CustomersGridComponent */]];
CustomersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CustomersRoutingModule);

//# sourceMappingURL=customers-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-user\"></span>\n                {{ title }}\n            </h3>\n        </header>\n        <br />\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"navbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Card)\" [class.active]=\"displayMode === displayModeEnum.Card\">\n                                <span class=\"glyphicon glyphicon-th-large\"></span> Card View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Grid)\" [class.active]=\"displayMode === displayModeEnum.Grid\">\n                                <span class=\"glyphicon glyphicon-align-justify\"></span> List View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Map)\" [class.active]=\"displayMode === displayModeEnum.Map\">\n                                <span class=\"glyphicon glyphicon-map-marker\"></span> Map View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a routerLink=\"/customers/0/edit\">\n                                <span class=\"glyphicon glyphicon-plus\"></span> New Customer\n                            </a>\n                        </li>\n                    </ul>\n                    <cm-filter-textbox class=\"navbar-right\"\n                     (changed)=\"filterChanged($event)\"></cm-filter-textbox>\n                </div>\n            </div>\n        </div>\n        \n        <cm-customers-card \n          [customers]=\"filteredCustomers\" \n          [hidden]=\"displayMode !== displayModeEnum.Card\"></cm-customers-card>\n    \n        <cm-customers-grid \n          [customers]=\"filteredCustomers\" \n          [hidden]=\"displayMode !== displayModeEnum.Grid\"></cm-customers-grid>\n\n        <cm-map *ngIf=\"filteredCustomers.length\" \n            [zoom]=\"2\" \n            [enabled]=\"displayMode === displayModeEnum.Map\" \n            [hidden]=\"displayMode !== displayModeEnum.Map\">\n          <cm-map-point \n            *ngFor=\"let customer of filteredCustomers\" \n            [latitude]=\"customer.latitude\" \n            [longitude]=\"customer.longitude\"\n            [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</a></h3>' + customer.city + ', ' + customer.state.name\"></cm-map-point>\n        </cm-map>\n\n        <cm-pagination\n            [totalItems]=\"totalRecords\" \n            [pageSize]=\"pageSize\" \n            (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n          \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_filter_service__ = __webpack_require__("../../../../../src/app/core/services/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = (function () {
    function CustomersComponent(dataService, filterService) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers for page: ' + page); });
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'city', 'state.name'];
            this.filteredCustomers = this.filterService.filter(this.customers, data, props);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cm-customers',
        template: __webpack_require__("../../../../../src/app/customers/customers.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_filter_service__["a" /* FilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_filter_service__["a" /* FilterService */]) === "function" && _b || Object])
], CustomersComponent);

var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));
var _a, _b;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/customers/customers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_routing_module__ = __webpack_require__("../../../../../src/app/customers/customers-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomersModule = (function () {
    function CustomersModule() {
    }
    return CustomersModule;
}());
CustomersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__customers_routing_module__["a" /* CustomersRoutingModule */], __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__customers_routing_module__["a" /* CustomersRoutingModule */].components]
    })
], CustomersModule);

//# sourceMappingURL=customers.module.js.map

/***/ })

});
//# sourceMappingURL=customers.module.chunk.js.map