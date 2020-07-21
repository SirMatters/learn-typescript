import { MatchData } from './MatchReader';
import { WinsAnalysis } from './WinsAnalysis';
import { ConsoleReport } from './ConsoleReport';

export interface Analyzer {
  run(d: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisToConsole(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  buildAndPrintReport(data: MatchData[]) {
    let result = this.analyzer.run(data);
    this.outputTarget.print(result);
  }
}
