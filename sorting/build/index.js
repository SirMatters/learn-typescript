"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var num = new NumbersCollection_1.NumbersCollection([1, 3, -5, 6, 0]);
var sorter = new Sorter_1.Sorter(num);
sorter.sort();
console.log(sorter.collection.data);
