import { MatchResult, MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

let reader = new MatchReader(new CsvFileReader('football.csv'));
reader.read();

let manUnWins = 0;
for (let r of reader.matches) {
  if (r[1] === 'Man United' && r[5] === MatchResult.homeWin) {
    manUnWins++;
  } else if (r[2] === 'Man United' && r[5] === MatchResult.awayWin) {
    manUnWins++;
  }
}

console.log(`Man United won ${manUnWins} games`);
