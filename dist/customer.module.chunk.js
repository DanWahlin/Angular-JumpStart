webpackJsonp(["customer.module"],{

/***/ "../../../../../src/app/customer/can-activate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateGuard = (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        //Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    CanActivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CanActivateGuard);
    return CanActivateGuard;
}());



/***/ }),

/***/ "../../../../../src/app/customer/can-deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        console.log("CustomerId: " + route.parent.params['id'] + " URL: " + state.url);
        //Check with component to see if we're able to deactivate
        return component.canDeactivate();
    };
    CanDeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details-image {\n    height:100px;width:100px;margin-top:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"details-image\" />\n    </div>\n    <div class=\"col-md-10\">\n      <h4>    \n          {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}&nbsp;          \n      </h4>\n      <br />\n      {{ customer.address }}\n      <br />\n      {{ customer.city }}, {{ customer.state.name }}\n    </div>\n  </div>    \n  <br /><br />\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <cm-map [latitude]=\"customer.latitude\" \n           [longitude]=\"customer.longitude\" \n           [zoom]=\"10\" \n           [enabled]=\"mapEnabled\"\n           [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</h3>' + customer.city + ', ' + customer.state.name\"></cm-map>\n    </div>\n  </div>\n</div>   \n<div *ngIf=\"!customer\" class=\"row\">\n   No customer found\n</div>  "

/***/ }),

/***/ "../../../../../src/app/customer/customer-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id)
                .subscribe(function (customer) {
                _this.customer = customer;
                _this.mapEnabled = true;
            });
        });
    };
    CustomerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-customer-details',
            template: __webpack_require__("../../../../../src/app/customer/customer-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__["a" /* DataService */]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customer-form input[type='text'], \n.customer-form input[type='number'],\n.customer-form input[type='email'],\n.customer-form select {\n    width:100%;\n}\n\n.customer-form .ng-invalid {\n  border-left: 5px solid #a94442;\n}\n\n.customer-form .ng-valid {\n  border-left: 5px solid #42A948;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"customer-form\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.pristine || firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.pristine || lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"address.pristine || address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"city.pristine || city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" \n              [(ngModel)]=\"customer.state.abbreviation\"\n              name=\"state\" \n              required>\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.abbreviation\">{{state.name}}</option>\n      </select>\n    </div>\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"customerForm.pristine || !customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n  </form>\n  <br />\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/customer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_modal_modal_service__ = __webpack_require__("../../../../../src/app/core/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_growler_growler_service__ = __webpack_require__("../../../../../src/app/core/growler/growler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerEditComponent = (function () {
    function CustomerEditComponent(router, route, dataService, growler, modalService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up. Don't technically need that here
        //since param won't be changing while component is alive. 
        //Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.operationText = 'Update';
                _this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id === 0) {
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (insertedCustomer) {
                if (insertedCustomer) {
                    //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to insert customer';
                    _this.growler.growl(msg, __WEBPACK_IMPORTED_MODULE_5__core_growler_growler_service__["a" /* GrowlerMessageType */].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (status) {
                if (status) {
                    //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.growler.growl('Operation performed successfully.', __WEBPACK_IMPORTED_MODULE_5__core_growler_growler_service__["a" /* GrowlerMessageType */].Success);
                    //this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to update customer';
                    _this.growler.growl(msg, __WEBPACK_IMPORTED_MODULE_5__core_growler_growler_service__["a" /* GrowlerMessageType */].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        //Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    CustomerEditComponent.prototype.canDeactivate = function () {
        if (!this.customerForm.dirty) {
            return true;
        }
        //Dirty show display modal dialog to user to confirm leaving
        var modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('customerForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], CustomerEditComponent.prototype, "customerForm", void 0);
    CustomerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-customer-edit',
            template: __webpack_require__("../../../../../src/app/customer/customer-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__core_growler_growler_service__["b" /* GrowlerService */],
            __WEBPACK_IMPORTED_MODULE_4__core_modal_modal_service__["a" /* ModalService */]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"customer && customer.orders\">\n        <h4>Orders for {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n        <br />\n        <table class=\"table table-striped table-hover orders-table\">\n            <tr *ngFor=\"let order of customer.orders;trackBy:ordersTrackBy\">\n                <td>{{ order.productName }}</td>\n                <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n            </tr>\n            <tr class=\"summary-border\">\n                <td>&nbsp;</td>\n                <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"customer && !customer.orders\" class=\"row\">\n        No orders found\n    </div> \n    <div *ngIf=\"!customer\" class=\"row\">\n        No customer found\n    </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/customer-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerOrdersComponent = (function () {
    function CustomerOrdersComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id).subscribe(function (customer) {
                _this.customer = customer;
            });
        });
    };
    CustomerOrdersComponent.prototype.ordersTrackBy = function (index, orderItem) {
        return index;
    };
    CustomerOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-customer-orders',
            template: __webpack_require__("../../../../../src/app/customer/customer-orders.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__["a" /* DataService */]])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_orders_component__ = __webpack_require__("../../../../../src/app/customer/customer-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_details_component__ = __webpack_require__("../../../../../src/app/customer/customer-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_edit_component__ = __webpack_require__("../../../../../src/app/customer/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__can_activate_guard__ = __webpack_require__("../../../../../src/app/customer/can-activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__can_deactivate_guard__ = __webpack_require__("../../../../../src/app/customer/can-deactivate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__customer_component__["a" /* CustomerComponent */],
        children: [
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_3__customer_orders_component__["a" /* CustomerOrdersComponent */] },
            { path: 'details', component: __WEBPACK_IMPORTED_MODULE_4__customer_details_component__["a" /* CustomerDetailsComponent */] },
            { path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_5__customer_edit_component__["a" /* CustomerEditComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_6__can_activate_guard__["a" /* CanActivateGuard */]],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__can_deactivate_guard__["a" /* CanDeactivateGuard */]]
            }
        ]
    }
];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__customer_component__["a" /* CustomerComponent */], __WEBPACK_IMPORTED_MODULE_3__customer_orders_component__["a" /* CustomerOrdersComponent */], __WEBPACK_IMPORTED_MODULE_4__customer_details_component__["a" /* CustomerDetailsComponent */], __WEBPACK_IMPORTED_MODULE_5__customer_edit_component__["a" /* CustomerEditComponent */]];
    CustomerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__can_activate_guard__["a" /* CanActivateGuard */], __WEBPACK_IMPORTED_MODULE_7__can_deactivate_guard__["a" /* CanDeactivateGuard */]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Customer Information</h3>\n        </header>\n        <br />\n        <div class=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"details\" routerLinkActive=\"active\">\n                       <span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Customer Details\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"orders\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-tags\"></span>&nbsp;&nbsp;Customer Orders\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"edit\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>&nbsp;&nbsp;Edit Customer\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n            <a routerLink=\"/customers\">View all Customers</a>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = (function () {
    //displayMode: CustomerDisplayModeEnum;
    //displayModeEnum = CustomerDisplayModeEnum;
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        //No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-orders',
            template: __webpack_require__("../../../../../src/app/customer/customer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CustomerComponent);
    return CustomerComponent;
}());

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }


/***/ }),

/***/ "../../../../../src/app/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__ = __webpack_require__("../../../../../src/app/customer/customer-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__customer_routing_module__["a" /* CustomerRoutingModule */], __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__customer_routing_module__["a" /* CustomerRoutingModule */].components]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

});
//# sourceMappingURL=customer.module.chunk.js.map