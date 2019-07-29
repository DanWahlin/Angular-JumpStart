(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n    <cm-navbar></cm-navbar>\n    <router-outlet></router-outlet>\n    <cm-growler position=\"top-right\" timeout=\"2000\"></cm-growler>\n    <cm-modal></cm-modal>\n    <cm-overlay delay=\"300\">\n        <span class=\"spinner\"></span>&nbsp;&nbsp;&nbsp;Loading\n    </cm-overlay>\n</main>\n<br /><br />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/modal/modal.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/modal/modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': modalVisibleAnimate}\"\n    [ngStyle]=\"{'display': modalVisible ? 'block' : 'none', 'opacity': modalVisibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">{{ modalContent.header }}</h4>\n            </div>\n            <div class=\"modal-body\">\n                {{ modalContent.body }}\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\" *ngIf=\"modalContent.cancelButtonVisible\">{{ modalContent.cancelButtonText }}</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"ok()\">{{ modalContent.OKButtonText }}</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inner navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\" style=\"\">\n            <button type=\"button\" class=\"navbar-toggle\" \n                    (click)=\"isCollapsed = !isCollapsed\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/customers\">\n                <img src=\"assets/images/people.png\" alt=\"logo\" />\n                <span class=\"app-title\">Customer Manager</span>\n            </a>\n            <span class=\"navbar-collapse\" [attr.data-collapse]=\"isCollapsed\">\n                <ul class=\"nav navbar-nav nav-pills navBarPadding\">\n                    <li routerLinkActive=\"active\"><a routerLink=\"/customers\">Customers</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/orders\">Orders</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n                    <li routerLinkActive=\"active\" (click)=\"loginOrOut()\"><a>{{ loginLogoutText }}</a></li>\n                </ul>\n            </span>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/overlay/overlay.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/overlay/overlay.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [class.active]=\"enabled\">\n    <div class=\"overlay-background\"></div>\n    <div class=\"overlay-content\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-lock\"></span> Login</h3>\n        </header>\n        <br />\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\" class=\"login-form\" novalidate>\n            <div class=\"login\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Email:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\" />\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.email.untouched || loginForm.controls.email.valid\">\n                            A valid email address is required\n                        </div>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Password:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\" />\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.password.untouched || loginForm.controls.password.valid\">\n                            Password is required (6 or more characters with at least one number)\n                        </div>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\n                    </div>\n                </div>\n                <br />\n                <div class=\"statusRow\">\n                    <br />\n                    <div class=\"label label-important\" *ngIf=\"errorMessage\">\n                        <span class=\"glyphicon glyphicon-thumbs-down icon-white\"></span>&nbsp;&nbsp;Error: {{ errorMessage }}\n                    </div>\n                </div>\n            </div>\n        </form>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/filter-textbox/filter-textbox.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/filter-textbox/filter-textbox.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n        Filter:\n        <input type=\"text\" name=\"filter\"\n            [(ngModel)]=\"model.filter\" \n            (keyup)=\"filterChanged($event)\"  />\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/map/map.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/map/map.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapContainer [style.height]=\"mapHeight\" [style.width]=\"mapWidth\">Map Loading....</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!isVisible\">\n  <ul class=\"pagination\">\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n      <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/strategies/preload-modules.strategy */ "./src/app/core/strategies/preload-modules.strategy.ts");




var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', data: { preload: true }, loadChildren: function () { return __webpack_require__.e(/*! import() | app-customer-customer-module */ "app-customer-customer-module").then(__webpack_require__.bind(null, /*! app/customer/customer.module */ "./src/app/customer/customer.module.ts")).then(function (m) { return m.CustomerModule; }); } },
    { path: 'customers', loadChildren: function () { return __webpack_require__.e(/*! import() | app-customers-customers-module */ "app-customers-customers-module").then(__webpack_require__.bind(null, /*! app/customers/customers.module */ "./src/app/customers/customers.module.ts")).then(function (m) { return m.CustomersModule; }); } },
    { path: 'orders', data: { preload: true }, loadChildren: function () { return __webpack_require__.e(/*! import() | app-orders-orders-module */ "app-orders-orders-module").then(__webpack_require__.bind(null, /*! app/orders/orders.module */ "./src/app/orders/orders.module.ts")).then(function (m) { return m.OrdersModule; }); } },
    { path: 'about', loadChildren: function () { return __webpack_require__.e(/*! import() | app-about-about-module */ "app-about-about-module").then(__webpack_require__.bind(null, /*! app/about/about.module */ "./src/app/about/about.module.ts")).then(function (m) { return m.AboutModule; }); } },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
    // NOTE: If you're using Angular 7 or lower you'll lazy loads routes the following way
    // { path: 'customers/:id', data: { preload: true }, loadChildren: 'app/customer/customer.module#CustomerModule' },
    // { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    // { path: 'orders', data: { preload: true }, loadChildren: 'app/orders/orders.module#OrdersModule' },
    // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(app_routes, { preloadingStrategy: _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__["PreloadModulesStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__["PreloadModulesStrategy"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-app-component',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"] // Shared (multi-instance) objects
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _growler_growler_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./growler/growler.module */ "./src/app/core/growler/growler.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/core/modal/modal.module.ts");
/* harmony import */ var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlay/overlay.module */ "./src/app/core/overlay/overlay.module.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sorter.service */ "./src/app/core/services/sorter.service.ts");
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/trackby.service */ "./src/app/core/services/trackby.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/core/services/dialog.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");


















var CoreModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoreModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_5__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"]],
            exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_5__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
            providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_11__["SorterService"], _services_filter_service__WEBPACK_IMPORTED_MODULE_10__["FilterService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _services_trackby_service__WEBPACK_IMPORTED_MODULE_12__["TrackByService"],
                _services_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_16__["EventBusService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                    multi: true,
                },
                { provide: 'Window', useFactory: function () { return window; } }
            ] // these should be singleton
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}(_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_14__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/ensure-module-loaded-once.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
  \*********************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    EnsureModuleLoadedOnceGuard.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return EnsureModuleLoadedOnceGuard;
}());



/***/ }),

/***/ "./src/app/core/growler/growler.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/growler/growler.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .growler {\n      position: fixed;\n      z-index: 999999;\n    }\n    \n    .growler.close-button:focus {\n      outline: 0;\n    }\n    \n    .growler.top-left {\n      top: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-right {\n      top: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-right {\n      bottom: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-left {\n      bottom: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-center {\n      top: 12px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%);\n    }\n    \n    .growler.bottom-center {\n      bottom: 12px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%);\n    }\n    \n    .growl {\n      cursor: pointer;\n      padding: 5;\n      width: 285px;\n      height: 65px; \n      opacity: 0;      \n      display: -webkit-box;      \n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      \n      -webkit-transition: opacity 1s;\n      transition: opacity 1s;        \n    }\n    \n    .growl.active {        \n      opacity: 1;\n    }\n    \n    .growl-message {\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ncm93bGVyL2dyb3dsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsU0FBUztNQUNULFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxTQUFTO01BQ1Qsc0NBQXNDO2NBQzlCLDhCQUE4QjtJQUN4Qzs7SUFFQTtNQUNFLFlBQVk7TUFDWixTQUFTO01BQ1Qsc0NBQXNDO2NBQzlCLDhCQUE4QjtJQUN4Qzs7SUFFQTtNQUNFLGVBQWU7TUFDZixVQUFVO01BQ1YsWUFBWTtNQUNaLFlBQVk7TUFDWixVQUFVO01BQ1Ysb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCOztNQUV2Qiw4QkFBOEI7TUFHOUIsc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBOztJQUVBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ncm93bGVyL2dyb3dsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZ3Jvd2xlciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLmNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci50b3AtbGVmdCB7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci50b3AtcmlnaHQge1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLmJvdHRvbS1yaWdodCB7XG4gICAgICBib3R0b206IDEycHg7XG4gICAgICByaWdodDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIuYm90dG9tLWxlZnQge1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIudG9wLWNlbnRlciB7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci5ib3R0b20tY2VudGVyIHtcbiAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA1O1xuICAgICAgd2lkdGg6IDI4NXB4O1xuICAgICAgaGVpZ2h0OiA2NXB4OyBcbiAgICAgIG9wYWNpdHk6IDA7ICAgICAgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7IFxuICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7ICAgICAgICBcbiAgICB9ICAgXG4gICAgXG4gICAgLmdyb3dsLmFjdGl2ZSB7ICAgICAgICBcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfSBcbiAgICBcbiAgICAuZ3Jvd2wtbWVzc2FnZSB7XG5cbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/core/growler/growler.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/growler/growler.component.ts ***!
  \***************************************************/
/*! exports provided: GrowlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerComponent", function() { return GrowlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");




var GrowlerComponent = /** @class */ (function () {
    function GrowlerComponent(growlerService, logger) {
        this.growlerService = growlerService;
        this.logger = logger;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    GrowlerComponent.prototype.ngOnInit = function () { };
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    GrowlerComponent.prototype.growl = function (message, growlType) {
        this.growlCount++;
        var bootstrapAlertType = _growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerMessageType"][growlType].toLowerCase();
        var messageType = "alert-" + bootstrapAlertType;
        var growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    };
    GrowlerComponent.prototype.removeGrowl = function (id) {
        var _this = this;
        this.growls.forEach(function (growl, index) {
            if (growl.id === id) {
                _this.growls.splice(index, 1);
                _this.growlCount--;
                _this.logger.log('removed ' + id);
            }
        });
    };
    GrowlerComponent.ctorParameters = function () { return [
        { type: _growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerService"] },
        { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GrowlerComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GrowlerComponent.prototype, "timeout", void 0);
    GrowlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-growler',
            template: "\n    <div [ngClass]=\"position\" class=\"growler\">\n      <div *ngFor=\"let growl of growls\" [ngClass]=\"{active: growl.enabled}\"\n          class=\"growl alert {{ growl.messageType }}\">\n          <span class=\"growl-message\">{{ growl.message }}</span>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./growler.component.css */ "./src/app/core/growler/growler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerService"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
    ], GrowlerComponent);
    return GrowlerComponent;
}());

var Growl = /** @class */ (function () {
    function Growl(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.show();
    }
    Growl.prototype.show = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.enabled = true;
            _this.setTimeout();
        }, 0);
    };
    Growl.prototype.setTimeout = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.hide();
        }, this.timeout);
    };
    Growl.prototype.hide = function () {
        var _this = this;
        this.enabled = false;
        window.setTimeout(function () {
            _this.growlerContainer.removeGrowl(_this.id);
        }, this.timeout);
    };
    Growl.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: GrowlerComponent }
    ]; };
    return Growl;
}());


/***/ }),

/***/ "./src/app/core/growler/growler.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/growler/growler.module.ts ***!
  \************************************************/
/*! exports provided: GrowlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerModule", function() { return GrowlerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _growler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growler.component */ "./src/app/core/growler/growler.component.ts");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");






var GrowlerModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GrowlerModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function GrowlerModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    GrowlerModule.ctorParameters = function () { return [
        { type: GrowlerModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    GrowlerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]],
            providers: [_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"]],
            declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [GrowlerModule])
    ], GrowlerModule);
    return GrowlerModule;
}(_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/growler/growler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/growler/growler.service.ts ***!
  \*************************************************/
/*! exports provided: GrowlerService, GrowlerMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerService", function() { return GrowlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerMessageType", function() { return GrowlerMessageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GrowlerService = /** @class */ (function () {
    function GrowlerService() {
    }
    GrowlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GrowlerService);
    return GrowlerService;
}());

var GrowlerMessageType;
(function (GrowlerMessageType) {
    GrowlerMessageType[GrowlerMessageType["Success"] = 0] = "Success";
    GrowlerMessageType[GrowlerMessageType["Danger"] = 1] = "Danger";
    GrowlerMessageType[GrowlerMessageType["Warning"] = 2] = "Warning";
    GrowlerMessageType[GrowlerMessageType["Info"] = 3] = "Info";
})(GrowlerMessageType || (GrowlerMessageType = {}));


/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth header (fake value is shown here)
        var authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
        var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/modal/modal.component.css":
/*!************************************************!*\
  !*** ./src/app/core/modal/modal.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  background: rgba(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/modal/modal.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/modal/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.show = function (modalContent) {
        var _this = this;
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(function () { return _this.modalVisibleAnimate = true; });
        var promise = new Promise(function (resolve, reject) {
            _this.cancel = function () {
                _this.hide();
                resolve(false);
            };
            _this.ok = function () {
                _this.hide();
                resolve(true);
            };
        });
        return promise;
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.modalVisibleAnimate = false;
        setTimeout(function () { return _this.modalVisible = false; }, 300);
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
    ]; };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/core/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/core/modal/modal.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/modal/modal.module.ts ***!
  \********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/core/modal/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");






var ModalModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModalModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function ModalModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    ModalModule.ctorParameters = function () { return [
        { type: ModalModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ModalModule])
    ], ModalModule);
    return ModalModule;
}(_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/modal/modal.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/modal/modal.service.ts ***!
  \*********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authservice, growler, logger) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.logger = logger;
        this.loginLogoutText = 'Login';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.authservice.authChanged
            .subscribe(function (loggedIn) {
            _this.setLoginLogoutText();
        }, function (err) { return _this.logger.log(err); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.loginOrOut = function () {
        var _this = this;
        var isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe(function (status) {
                _this.setLoginLogoutText();
                _this.growler.growl('Logged Out', _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerMessageType"].Info);
                _this.router.navigate(['/customers']);
                return;
            }, function (err) { return _this.logger.log(err); });
        }
        this.redirectToLogin();
    };
    NavbarComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.setLoginLogoutText = function () {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"] },
        { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay-request-response.interceptor.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/overlay/overlay-request-response.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayRequestResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRequestResponseInterceptor", function() { return OverlayRequestResponseInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");






var OverlayRequestResponseInterceptor = /** @class */ (function () {
    function OverlayRequestResponseInterceptor(eventBus) {
        this.eventBus = eventBus;
    }
    OverlayRequestResponseInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var randomTime = this.getRandomIntInclusive(0, 1500);
        var started = Date.now();
        this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpRequest));
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(randomTime), // Simulate random Http call delays
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                _this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpResponse));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpResponse));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    OverlayRequestResponseInterceptor.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    };
    OverlayRequestResponseInterceptor.ctorParameters = function () { return [
        { type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EventBusService"] }
    ]; };
    OverlayRequestResponseInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EventBusService"]])
    ], OverlayRequestResponseInterceptor);
    return OverlayRequestResponseInterceptor;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display:none;\n}\n\n.overlay.active {        \n  display: block;\n}\n\n.overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  background-color:rgba(0,0,0,0.6);\n}\n\n.overlay-content {\n\n}\n\n.overlay-content {\n  position: fixed;\n  z-index: 999999;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border: 1px solid rgb(94, 94, 94);\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n\n  cursor: pointer;\n  padding: 5;\n  width: 285px;\n  height: 100px;    \n  display: -webkit-box;    \n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  \n  \n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;        \n} \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsc0NBQXNDO1VBQzlCLDhCQUE4Qjs7RUFFdEMsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1Qjs7O0VBR3ZCLDhCQUE4QjtFQUc5QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xuICBkaXNwbGF5Om5vbmU7XG59XG5cbi5vdmVybGF5LmFjdGl2ZSB7ICAgICAgICBcbiAgZGlzcGxheTogYmxvY2s7XG59IFxuXG4ub3ZlcmxheS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjYpO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcblxufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTQsIDk0LCA5NCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDU7XG4gIHdpZHRoOiAyODVweDtcbiAgaGVpZ2h0OiAxMDBweDsgICAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyBcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxczsgICAgICAgIFxufSBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/overlay/overlay.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.ts ***!
  \***************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");



var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(eventBus) {
        this.eventBus = eventBus;
        this.enabled = false;
        this.queue = [];
        this.timerId = null;
        this.timerHideId = null;
        this.delay = 500;
    }
    OverlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Handle request
        this.httpRequestSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["Events"].httpRequest, (function () {
            _this.queue.push({});
            if (_this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(function () {
                    if (_this.queue.length) {
                        _this.enabled = true;
                    }
                }, _this.delay);
            }
        }));
        // Handle response
        this.httpResponseSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["Events"].httpResponse, (function () {
            _this.queue.pop();
            if (_this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(function () {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (_this.queue.length === 0) {
                        _this.enabled = false;
                    }
                }, _this.delay);
            }
        }));
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    };
    OverlayComponent.ctorParameters = function () { return [
        { type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverlayComponent.prototype, "delay", void 0);
    OverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-overlay',
            template: __webpack_require__(/*! raw-loader!./overlay.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/core/overlay/overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/overlay/overlay.module.ts ***!
  \************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay-request-response.interceptor */ "./src/app/core/overlay/overlay-request-response.interceptor.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay.component */ "./src/app/core/overlay/overlay.component.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");







var OverlayModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OverlayModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function OverlayModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    OverlayModule.ctorParameters = function () { return [
        { type: OverlayModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    OverlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
            declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__["OverlayRequestResponseInterceptor"],
                    multi: true,
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [OverlayModule])
    ], OverlayModule);
    return OverlayModule;
}(_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_6__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, window) {
        this.http = http;
        this.window = window;
        // Can use /api/auth below when running locally
        // Full domain/port is included for Docker example or if it were to run in the cloud
        this.port = (this.window.location.port) ? ':' + this.window.location.port : '';
        this.baseUrl = this.window.location.protocol + "//" + this.window.location.hostname + this.port;
        this.authUrl = this.baseUrl + '/api/auth';
        this.isAuthenticated = false;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthService.prototype.userAuthChanged = function (status) {
        this.authChanged.emit(status); // Raise changed event
    };
    AuthService.prototype.login = function (userLogin) {
        var _this = this;
        return this.http.post(this.authUrl + '/login', userLogin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (loggedIn) {
            _this.isAuthenticated = loggedIn;
            _this.userAuthChanged(loggedIn);
            return loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.authUrl + '/logout', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (loggedOut) {
            _this.isAuthenticated = !loggedOut;
            _this.userAuthChanged(!loggedOut); // Return loggedIn status
            return loggedOut;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['Window',] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AuthService.prototype, "authChanged", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('Window')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataService = /** @class */ (function () {
    function DataService(http, window) {
        this.http = http;
        this.window = window;
        // Can use /api/customers and /api/orders below when running locally
        // Full domain/port is included for Docker example or if it were to run in the cloud
        this.port = (this.window.location.port) ? ':' + this.window.location.port : '';
        this.baseUrl = this.window.location.protocol + "//" + this.window.location.hostname + this.port;
        this.customersBaseUrl = this.baseUrl + '/api/customers';
        this.ordersBaseUrl = this.baseUrl + '/api/orders';
    }
    DataService.prototype.getCustomersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var totalRecords = +res.headers.get('X-InlineCount');
            var customers = res.body;
            _this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.customersBaseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (customers) {
            _this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomer = function (id) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (customer) {
            _this.calculateCustomersOrderTotal([customer]);
            return customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.insertCustomer = function (customer) {
        return this.http.post(this.customersBaseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.status; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.status; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getStates = function () {
        return this.http.get('/api/states')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Node.js server error');
    };
    DataService.prototype.calculateCustomersOrderTotal = function (customers) {
        var e_1, _a, e_2, _b;
        try {
            for (var customers_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](customers), customers_1_1 = customers_1.next(); !customers_1_1.done; customers_1_1 = customers_1.next()) {
                var customer = customers_1_1.value;
                if (customer && customer.orders) {
                    var total = 0;
                    try {
                        for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](customer.orders), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var order = _d.value;
                            total += order.itemCost;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    customer.orderTotal = total;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (customers_1_1 && !customers_1_1.done && (_a = customers_1.return)) _a.call(customers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['Window',] }] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('Window')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogService = /** @class */ (function () {
    function DialogService() {
        this.message = 'Is it OK?';
    }
    DialogService.prototype.confirm = function (message) {
        if (message) {
            this.message = message;
        }
        this.promise = new Promise(this.resolver);
        return this.promise;
    };
    DialogService.prototype.resolver = function (resolve) {
        return resolve(window.confirm('Is it OK?'));
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/core/services/event-bus.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var EventBusService = /** @class */ (function () {
    function EventBusService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EventBusService.prototype.on = function (event, action) {
        return this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.value;
        }))
            .subscribe(action);
    };
    EventBusService.prototype.emit = function (event) {
        this.subject.next(event);
    };
    EventBusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());

var EmitEvent = /** @class */ (function () {
    function EmitEvent(name, value) {
        this.name = name;
        this.value = value;
    }
    EmitEvent.ctorParameters = function () { return [
        { type: undefined },
        { type: undefined }
    ]; };
    return EmitEvent;
}());

var Events;
(function (Events) {
    Events[Events["httpRequest"] = 0] = "httpRequest";
    Events[Events["httpResponse"] = 1] = "httpResponse";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/core/services/filter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");



var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.filter = function (items, data, props) {
        return items.filter(function (item) {
            var e_1, _a;
            var match = false;
            try {
                for (var props_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                    var prop = props_1_1.value;
                    if (prop.indexOf('.') > -1) {
                        var value = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, item);
                        if (value && value.toUpperCase().indexOf(data) > -1) {
                            match = true;
                            break;
                        }
                        continue;
                    }
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return match;
        });
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.log(msg);
        }
        else {
            // AppInsights
        }
    };
    LoggerService.prototype.logError = function (msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.error(msg);
        }
        else {
            // AppInsights
        }
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/property-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/property-resolver.ts ***!
  \****************************************************/
/*! exports provided: PropertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolver", function() { return PropertyResolver; });
var PropertyResolver = /** @class */ (function () {
    function PropertyResolver() {
    }
    PropertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return PropertyResolver;
}());



/***/ }),

/***/ "./src/app/core/services/sorter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/sorter.service.ts ***!
  \*************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");



var SorterService = /** @class */ (function () {
    function SorterService() {
        this.property = null;
        this.direction = 1;
    }
    SorterService.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, a);
                bVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (_this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    SorterService.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    SorterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/app/core/services/trackby.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/trackby.service.ts ***!
  \**************************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrackByService = /** @class */ (function () {
    function TrackByService() {
    }
    TrackByService.prototype.customer = function (index, customer) {
        return customer.id;
    };
    TrackByService.prototype.order = function (index, order) {
        return index;
    };
    TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TrackByService);
    return TrackByService;
}());



/***/ }),

/***/ "./src/app/core/services/validation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/validation.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/core/strategies/preload-modules.strategy.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/strategies/preload-modules.strategy.ts ***!
  \*************************************************************/
/*! exports provided: PreloadModulesStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadModulesStrategy", function() { return PreloadModulesStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading




var PreloadModulesStrategy = /** @class */ (function () {
    function PreloadModulesStrategy(logger) {
        this.logger = logger;
    }
    PreloadModulesStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.logger.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    PreloadModulesStrategy.ctorParameters = function () { return [
        { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
    ]; };
    PreloadModulesStrategy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
    ], PreloadModulesStrategy);
    return PreloadModulesStrategy;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




var routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule.components = [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]];
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form input[type='text'], \n.login-form input[type='email'],\n.login-form input[type='password'] {\n    width:75%;\n}\n\n.login-form .ng-invalid {\n  border-left: 5px solid #a94442;\n}\n\n.login-form .ng-valid {\n  border-left: 5px solid #42A948;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksU0FBUztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSB7XG4gICAgd2lkdGg6NzUlO1xufVxuXG4ubG9naW4tZm9ybSAubmctaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0Mjtcbn1cblxuLmxvZ2luLWZvcm0gLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/validation.service */ "./src/app/core/services/validation.service.ts");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService, growler, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.logger = logger;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].passwordValidator]]
        });
    };
    LoginComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.authService.login(value)
            .subscribe(function (status) {
            if (status) {
                _this.growler.growl('Logged in', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Info);
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/customers']);
                }
            }
            else {
                var loginError = 'Unable to login';
                _this.errorMessage = loginError;
                _this.growler.growl(loginError, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Danger);
            }
        }, function (err) { return _this.logger.log(err); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerService"] },
        { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]],
            declarations: [_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"].components]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/sortby.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/sortby.directive.ts ***!
  \*******************************************************/
/*! exports provided: SortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDirective", function() { return SortByDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortByDirective = /** @class */ (function () {
    function SortByDirective() {
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SortByDirective.prototype, "sortBy", {
        set: function (value) {
            this.sortProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    SortByDirective.prototype.onClick = function () {
        event.preventDefault();
        this.sorted.next(this.sortProperty); // Raise clicked event
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SortByDirective.prototype, "sorted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cmSortBy'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SortByDirective.prototype, "sortBy", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SortByDirective.prototype, "onClick", null);
    SortByDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[cmSortBy]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SortByDirective);
    return SortByDirective;
}());



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "cm-filter-textbox {\n    margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbHRlci10ZXh0Ym94L2ZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpbHRlci10ZXh0Ym94L2ZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjbS1maWx0ZXItdGV4dGJveCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterTextboxComponent.prototype, "changed", void 0);
    FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-filter-textbox',
            template: __webpack_require__(/*! raw-loader!./filter-textbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/filter-textbox/filter-textbox.component.html"),
            styles: [__webpack_require__(/*! ./filter-textbox.component.css */ "./src/app/shared/filter-textbox/filter-textbox.component.css")]
        })
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.module.ts ***!
  \****************************************************************/
/*! exports provided: FilterTextboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxModule", function() { return FilterTextboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");





var FilterTextboxModule = /** @class */ (function () {
    function FilterTextboxModule() {
    }
    FilterTextboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"]],
            declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"]]
        })
    ], FilterTextboxModule);
    return FilterTextboxModule;
}());



/***/ }),

/***/ "./src/app/shared/map/map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />




var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.markers = [];
        this.latitude = 34.5133;
        this.longitude = -94.1629;
        this.markerText = 'Your Location';
        this.zoom = 8;
    }
    Object.defineProperty(MapComponent.prototype, "enabled", {
        // Necessary since a map rendered while container is hidden
        // will not load the map tiles properly and show a grey screen
        get: function () {
            return this.isEnabled;
        },
        set: function (isEnabled) {
            this.isEnabled = isEnabled;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        if (this.latitude && this.longitude) {
            if (this.mapHeight && this.mapWidth) {
                this.mapHeight = this.height + 'px';
                this.mapWidth = this.width + 'px';
            }
            else {
                var hw = this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);
                this.mapHeight = hw.height / 2 + 'px';
                this.mapWidth = hw.width + 'px';
            }
        }
    };
    MapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.mapPoints.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe(function () {
            if (_this.enabled) {
                _this.renderMapPoints();
            }
        });
    };
    MapComponent.prototype.init = function () {
        var _this = this;
        // Need slight delay to avoid grey box when google script has previously been loaded.
        // Otherwise map <div> container may not be visible yet which causes the grey box.
        setTimeout(function () {
            _this.ensureScript();
        }, 200);
    };
    MapComponent.prototype.getWindowHeightWidth = function (document) {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if (width > 900) {
            width = 900;
        }
        return { height: height, width: width };
    };
    MapComponent.prototype.ensureScript = function () {
        var _this = this;
        this.loadingScript = true;
        var document = this.mapDiv.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            if (this.isEnabled) {
                this.renderMap();
            }
        }
        else {
            var mapsScript = document.createElement('script');
            mapsScript.id = 'googlemaps';
            mapsScript.type = 'text/javascript';
            mapsScript.async = true;
            mapsScript.defer = true;
            mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG1KDldeF_2GzaTXrEHR0l6cyCS7AnmBw';
            mapsScript.onload = function () {
                _this.loadingScript = false;
                if (_this.isEnabled) {
                    _this.renderMap();
                }
            };
            document.body.appendChild(mapsScript);
        }
    };
    MapComponent.prototype.renderMap = function () {
        var latlng = this.createLatLong(this.latitude, this.longitude);
        var options = {
            zoom: this.zoom,
            center: latlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        if (this.mapPoints && this.mapPoints.length) {
            this.renderMapPoints();
        }
        else {
            this.createMarker(latlng, this.map, this.markerText);
        }
    };
    MapComponent.prototype.createLatLong = function (latitude, longitude) {
        return (latitude && longitude) ? new google.maps.LatLng(latitude, longitude) : null;
    };
    MapComponent.prototype.renderMapPoints = function () {
        var _this = this;
        if (this.map) {
            this.clearMapPoints();
            this.mapPoints.forEach(function (point) {
                var mapPointLatlng = _this.createLatLong(point.latitude, point.longitude);
                _this.createMarker(mapPointLatlng, _this.map, point.markerText);
            });
        }
    };
    MapComponent.prototype.clearMapPoints = function () {
        this.markers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.markers = [];
    };
    MapComponent.prototype.createMarker = function (position, map, title) {
        var infowindow = new google.maps.InfoWindow({
            content: title
        });
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "longitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "markerText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "zoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "enabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapContainer', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapComponent.prototype, "mapDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_mapPoint_component__WEBPACK_IMPORTED_MODULE_3__["MapPointComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MapComponent.prototype, "mapPoints", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/map/map.component.html"),
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/map/map.module.ts":
/*!******************************************!*\
  !*** ./src/app/shared/map/map.module.ts ***!
  \******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/shared/map/map.component.ts");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");





var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__["MapPointComponent"]],
            declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__["MapPointComponent"]]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/shared/map/mapPoint.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/map/mapPoint.component.ts ***!
  \**************************************************/
/*! exports provided: MapPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPointComponent", function() { return MapPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapPointComponent = /** @class */ (function () {
    function MapPointComponent() {
    }
    MapPointComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapPointComponent.prototype, "longitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapPointComponent.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MapPointComponent.prototype, "markerText", void 0);
    MapPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-map-point',
            template: ""
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapPointComponent);
    return MapPointComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination>.active>a, \n.pagination>.active>a:focus, \n.pagination>.active>a:hover, \n.pagination>.active>span, \n.pagination>.active>span:focus, \n.pagination>.active>span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination a {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPmE6Zm9jdXMsIFxuLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCBcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46Zm9jdXMsIFxuLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZGNDtcbiAgYm9yZGVyLWNvbG9yOiAjMDI3RkY0O1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this.pagerPageSize;
        },
        set: function (size) {
            this.pagerPageSize = size;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this.pagerTotalItems;
        },
        set: function (itemCount) {
            this.pagerTotalItems = itemCount;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.update = function () {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (var i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.previousNext = function (direction, event) {
        var page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "pageSize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalItems", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.module.ts ***!
  \********************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/app/shared/pagination/pagination.component.ts");




var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
            declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
        })
    ], PaginationModule);
    return PaginationModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
    ], TrimPipe);
    return TrimPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.module */ "./src/app/shared/filter-textbox/filter-textbox.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.module */ "./src/app/shared/map/map.module.ts");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.module */ "./src/app/shared/pagination/pagination.module.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/sortby.directive */ "./src/app/shared/directives/sortby.directive.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"],
                _map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]],
            declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danwahlin/Dropbox/Projects/GitHub/Angular-JumpStart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map