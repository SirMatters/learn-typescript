import { dateStringToDate } from './utils';

export interface DataReader {
  read(): void;
  data: string[][];
}

export enum MatchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

export type MatchData = [
  Date,
  string,
  string,
  string,
  string,
  MatchResult,
  string
];

export class MatchReader {
  public matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  read(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (r: string[]): MatchData => [
        dateStringToDate(r[0]),
        r[1],
        r[2],
        r[3],
        r[4],
        r[5] as MatchResult,
        r[6],
      ]
    );
  }
}
