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
var sorter_1 = require('../../utils/sorter');
var filter_textbox_component_1 = require('../filter-textbox/filter-textbox-component');
var sortby_directive_1 = require('../../directives/sortby/sortby-directive');
var capitalize_pipe_1 = require('../../pipes/capitalize-pipe');
var CustomersComponent = (function () {
    function CustomersComponent(dataService) {
        this.dataService = dataService;
    }
    CustomersComponent.prototype.onInit = function () {
        var _this = this;
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.listDisplayModeEnabled = false;
        this.customers = this.filteredCustomers = [];
        this.dataService.customers
            .subscribe(function (customers) { return _this.customers = _this.filteredCustomers = customers; });
        this.sorter = new sorter_1.Sorter();
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        //Removed DisplayMode enum due to error in 42...will look into it later
        switch (mode) {
            case 'Card':
                this.listDisplayModeEnabled = false;
                break;
            case 'List':
                this.listDisplayModeEnabled = true;
                break;
        }
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
            var filtered = this.customers.filter(function (item) {
                var match = false;
                for (var _i = 0; _i < props.length; _i++) {
                    var prop = props[_i];
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            this.filteredCustomers = filtered;
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent.prototype.deleteCustomer = function (id) {
    };
    CustomersComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.filteredCustomers, prop);
    };
    CustomersComponent = __decorate([
        angular2_1.Component({
            selector: 'customers',
            providers: [data_service_1.DataService],
            templateUrl: 'app/components/customers/customers-component.html',
            directives: [router_1.RouterLink, angular2_1.NgFor, filter_textbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective, angular2_1.NgClass],
            pipes: [capitalize_pipe_1.CapitalizePipe]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], CustomersComponent);
    return CustomersComponent;
})();
exports.CustomersComponent = CustomersComponent;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Card"] = 0] = "Card";
    DisplayMode[DisplayMode["List"] = 1] = "List";
})(exports.DisplayMode || (exports.DisplayMode = {}));
var DisplayMode = exports.DisplayMode;
//# sourceMappingURL=customers-component.js.map