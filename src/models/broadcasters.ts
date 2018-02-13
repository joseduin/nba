import {Tv} from "./tv";

export class Broadcasters {

  public national         : Array<Tv>;
  public canadian         : Array<Tv>;
  public vTeam            : Array<Tv>;
  public hTeam            : Array<Tv>;
  public spanish_hTeam    : Array<Tv>;
  public spanish_vTeam    : Array<Tv>;
  public spanish_national : Array<Tv>;

  constructor(broadcasters: Broadcasters) {
    this.national         = broadcasters.national;
    this.canadian         = broadcasters.canadian;
    this.vTeam            = broadcasters.vTeam;
    this.hTeam            = broadcasters.hTeam;
    this.spanish_hTeam    = broadcasters.spanish_hTeam;
    this.spanish_vTeam    = broadcasters.spanish_vTeam;
    this.spanish_national = broadcasters.spanish_national;
  }

}
