import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

let num = new NumbersCollection([1, 3, -5, 6, 0]);
let str = new CharactersCollection('ngashaaau');
let sorter = new Sorter(str);
sorter.sort();
console.log(str.data);
