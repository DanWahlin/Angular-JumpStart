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
var FilterTextboxComponent = (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new angular2_1.EventEmitter();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.next(this.model.filter); //Raise changed event
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], FilterTextboxComponent.prototype, "changed");
    FilterTextboxComponent = __decorate([
        angular2_1.Component({
            selector: 'filter-textbox',
            template: "\n    <form>\n         Filter:\n         <input type=\"text\" \n                [(ng-model)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  ",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
})();
exports.FilterTextboxComponent = FilterTextboxComponent;
//# sourceMappingURL=filter-textbox-component.js.map