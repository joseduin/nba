export class Team {

  public teamId     : string;
  public triCode    : string;
  public win        : string;
  public loss       : string;
  public seriesWin  : string;
  public seriesLoss : string;
  public score      : string;
  public linescore  : Array<LinesCore>;

  constructor(team: Team) {
    this.teamId     = team.teamId;
    this.triCode    = team.triCode;
    this.win        = team.win;
    this.loss       = team.loss;
    this.seriesWin  = team.seriesWin;
    this.seriesLoss = team.seriesLoss;
    this.score      = team.score;
    this.linescore  = team.linescore;
  }

}

export class LinesCore {

  public score     : string;

  constructor(l: LinesCore) {
    this.score = l.score;
  }

}
