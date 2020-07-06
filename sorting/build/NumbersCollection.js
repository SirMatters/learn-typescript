"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.swap = function (a, b) {
        var _a;
        _a = [this.data[b], this.data[a]], this.data[a] = _a[0], this.data[b] = _a[1];
    };
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
