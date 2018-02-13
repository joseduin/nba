export class Jugadas {

  public plays: Array<Jugada>;

  constructor(j: Jugadas) {
    this.plays = j.plays;
  }

}

export class Jugada {

  public clock : string;
  public eventMsgType : string;
  public description : string;
  public personId : string;
  public teamId : string;
  public vTeamScore : string;
  public hTeamScore : string;
  public isScoreChange : boolean;
  public isVideoAvailable : boolean;
  public formatted: Formatted;

  constructor(j: Jugada) {
    this.clock = j.clock;
    this.eventMsgType = j.eventMsgType;
    this.description = j.description;
    this.personId = j.personId;
    this.teamId = j.teamId;
    this.vTeamScore = j.vTeamScore;
    this.hTeamScore = j.hTeamScore;
    this.isScoreChange = j.isScoreChange;
    this.isVideoAvailable = j.isVideoAvailable;
    this.formatted = j.formatted;
  }
}

export class Formatted {

  public description: string;

  constructor(f: Formatted) {
    this.description = f.description;
  }

}

