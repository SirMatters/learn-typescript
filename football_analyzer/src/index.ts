import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './ConsoleReport';
import { WinsAnalysis } from './WinsAnalysis';
import { Summary } from './Summary';

let reader = new MatchReader(new CsvFileReader('football.csv'));
reader.read();
let reader1 = MatchReader.fromCsv('football.csv');
reader1.read();

let summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
let summary1 = Summary.winsAnalysisToConsole('Man United');

summary.buildAndPrintReport(reader.matches);
summary.buildAndPrintReport(reader.matches);
