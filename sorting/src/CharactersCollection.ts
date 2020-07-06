import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  swap(a: number, b: number): void {
    const arr = this.data.split('');
    [arr[a], arr[b]] = [arr[b], arr[a]];
    this.data = arr.join('');
  }

  compare(a: number, b: number): boolean {
    return this.data[a].toLowerCase() > this.data[b].toLowerCase();
  }
}
