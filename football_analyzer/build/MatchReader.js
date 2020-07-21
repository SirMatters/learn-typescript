"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["homeWin"] = "H";
    MatchResult["awayWin"] = "A";
    MatchResult["draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.read = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (r) { return [
            utils_1.dateStringToDate(r[0]),
            r[1],
            r[2],
            parseInt(r[3]) || 0,
            parseInt(r[4]) || 0,
            r[5],
            r[6],
        ]; });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
