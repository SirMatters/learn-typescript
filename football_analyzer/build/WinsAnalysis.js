"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (data) {
        var totalWins = 0;
        for (var m in data) {
            if (m[2] === this.team && m[5] === MatchReader_1.MatchResult.homeWin) {
                totalWins++;
            }
            else if (m[3] === this.team && m[5] === MatchReader_1.MatchResult.awayWin) {
                totalWins++;
            }
        }
        return this.team + " won " + totalWins + " matches";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
