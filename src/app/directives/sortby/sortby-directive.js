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
var SortByDirective = (function () {
    function SortByDirective(el) {
        var _this = this;
        this.sorted = new angular2_1.EventEmitter();
        this.sortProperty = el.nativeElement.getAttribute('sort-by');
        el.nativeElement.addEventListener('click', function (event) { return _this.elementClicked(event); });
        this.sorted = new angular2_1.EventEmitter();
    }
    SortByDirective.prototype.elementClicked = function (event) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], SortByDirective.prototype, "sorted");
    SortByDirective = __decorate([
        angular2_1.Directive({
            selector: '[sort-by]'
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], SortByDirective);
    return SortByDirective;
})();
exports.SortByDirective = SortByDirective;
//# sourceMappingURL=sortby-directive.js.map