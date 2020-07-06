import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

let num = new NumbersCollection([1, 3, -5, 6, 0]);
let sorter = new Sorter(num);
sorter.sort();
console.log(sorter.collection.data);
