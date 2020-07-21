"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (data) {
        var totalWins = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var m = data_1[_i];
            if (m[1] === this.team && m[5] === MatchReader_1.MatchResult.homeWin) {
                totalWins++;
            }
            else if (m[2] === this.team && m[5] === MatchReader_1.MatchResult.awayWin) {
                totalWins++;
            }
        }
        return this.team + " won " + totalWins + " matches";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
