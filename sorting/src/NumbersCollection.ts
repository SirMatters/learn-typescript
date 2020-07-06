import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  swap(a: number, b: number): void {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  get length(): number {
    return this.data.length;
  }
}
