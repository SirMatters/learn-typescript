"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
reader.read();
