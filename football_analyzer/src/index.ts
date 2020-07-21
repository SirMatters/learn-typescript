import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './ConsoleReport';
import { WinsAnalysis } from './WinsAnalysis';
import { Summary } from './Summary';

let reader = new MatchReader(new CsvFileReader('football.csv'));
reader.read();

let summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(reader.matches);
