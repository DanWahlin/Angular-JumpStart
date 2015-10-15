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
var CurrencyPipe = (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value) {
        if (value && !isNaN(value)) {
            return '$' + parseFloat(value).toFixed(2);
        }
        return '$0.00';
    };
    CurrencyPipe = __decorate([
        angular2_1.Pipe({ name: 'currency' }), 
        __metadata('design:paramtypes', [])
    ], CurrencyPipe);
    return CurrencyPipe;
})();
exports.CurrencyPipe = CurrencyPipe;
//# sourceMappingURL=currency-pipe.js.map