"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
reader.read();
var manUnWins = 0;
for (var _i = 0, _a = reader.matches; _i < _a.length; _i++) {
    var r = _a[_i];
    if (r[1] === 'Man United' && r[5] === MatchReader_1.MatchResult.homeWin) {
        manUnWins++;
    }
    else if (r[2] === 'Man United' && r[5] === MatchReader_1.MatchResult.awayWin) {
        manUnWins++;
    }
}
console.log("Man United won " + manUnWins + " games");
