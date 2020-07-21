"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (data) {
        var result = this.analyzer.run(data);
        this.outputTarget.print(result);
    };
    return Summary;
}());
exports.Summary = Summary;
