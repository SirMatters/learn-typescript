import fs from 'fs';

export abstract class CsvFileReader<T> {
  abstract mapRow(r: string[]): T;
  constructor(public filePath: string) {}

  public data: T[] = [];

  public read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: 'utf8' })
      .split('\n')
      .map((r: string) => r.split(','))
      .map(this.mapRow);
  }
}
