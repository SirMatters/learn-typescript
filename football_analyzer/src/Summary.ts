import { MatchData } from './MatchReader';

export interface Analyzer {
  run(d: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(data: MatchData[]) {
    let result = this.analyzer.run(data);
    this.outputTarget.print(result);
  }
}
