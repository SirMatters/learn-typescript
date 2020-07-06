"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.swap = function (a, b) {
        var _a;
        var arr = this.data.split('');
        _a = [arr[b], arr[a]], arr[a] = _a[0], arr[b] = _a[1];
        this.data = arr.join('');
    };
    CharactersCollection.prototype.compare = function (a, b) {
        return this.data[a].toLowerCase() > this.data[b].toLowerCase();
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
