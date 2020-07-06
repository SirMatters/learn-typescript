"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (this.collection[j] < this.collection[j + 1]) {
                    _a = [
                        this.collection[j + 1],
                        this.collection[j],
                    ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([1, 3, 5, 6, 2]);
sorter.sort();
console.log(sorter.collection);
