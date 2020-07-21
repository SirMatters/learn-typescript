import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

let reader = new MatchReader(new CsvFileReader('football.csv'));
reader.read();
