import { Analyzer } from './Summary';
import { MatchData, MatchResult } from './MatchReader';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(data: MatchData[]): string {
    let totalWins = 0;
    for (let m of data) {
      if (m[1] === this.team && m[5] === MatchResult.homeWin) {
        totalWins++;
      } else if (m[2] === this.team && m[5] === MatchResult.awayWin) {
        totalWins++;
      }
    }
    return `${this.team} won ${totalWins} matches`;
  }
}
