export interface Sortable {
  swap(a: number, b: number): void;
  compare(a: number, b: number): boolean;
  length: number;
}

export abstract class Sorter {
  abstract swap(a: number, b: number): void;
  abstract compare(a: number, b: number): boolean;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
