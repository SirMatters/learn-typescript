import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from '../utils';

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

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(r: string[]): MatchData {
    return [
      dateStringToDate(r[0]),
      r[1],
      r[2],
      r[3],
      r[4],
      r[5] as MatchResult,
      r[6],
    ];
  }
}
