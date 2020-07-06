import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

let ll = new LinkedList();
ll.add(10);
ll.add(-1);
ll.add(3);
ll.add(2);
ll.add(6);

ll.sort();
ll.print();
