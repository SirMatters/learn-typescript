"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (s) {
    var strArr = s.split('/').map(function (v) { return parseInt(v); });
    return new Date(strArr[2], strArr[1], strArr[0]);
};
