import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  constructor(public filePath: string) {}

  public data: string[][] = [];

  public read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: 'utf8' })
      .split('\n')
      .map((r: string) => r.split(','));
  }
}
