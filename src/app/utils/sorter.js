System.register([], function(exports_1) {
    var Sorter;
    return {
        setters:[],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                    this.property = null;
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (collection, prop) {
                    var _this = this;
                    this.property = prop;
                    this.direction = (this.property === prop) ? this.direction * -1 : 1;
                    collection.sort(function (a, b) {
                        if (a[prop] === b[prop]) {
                            return 0;
                        }
                        else if (a[prop] > b[prop]) {
                            return _this.direction * -1;
                        }
                        else {
                            return _this.direction * 1;
                        }
                    });
                };
                return Sorter;
            })();
            exports_1("Sorter", Sorter);
        }
    }
});
//# sourceMappingURL=sorter.js.map