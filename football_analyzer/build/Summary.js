"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./WinsAnalysis");
var ConsoleReport_1 = require("./ConsoleReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisToConsole = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    Summary.prototype.buildAndPrintReport = function (data) {
        var result = this.analyzer.run(data);
        this.outputTarget.print(result);
    };
    return Summary;
}());
exports.Summary = Summary;
