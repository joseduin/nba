// https://neulionms-a.akamaihd.net/nba/player/v1/nba/site/images/teams/{{tricode}}_p.png

export class Equipo {

  public isNBAFranchise : boolean;
  public isAllStar      : boolean;
  public city           : string;
  public altCityName    : string;
  public fullName       : string;
  public tricode        : string;
  public teamId         : string;
  public nickname       : string;
  public urlName        : string;
  public confName       : string;
  public divName        : string;

  constructor(equipo: Equipo) {
    this.isNBAFranchise = equipo.isNBAFranchise;
    this.isAllStar      = equipo.isAllStar;
    this.city           = equipo.city;
    this.altCityName    = equipo.altCityName;
    this.fullName       = equipo.fullName;
    this. tricode       = equipo.tricode;
    this. teamId        = equipo.teamId;
    this. nickname      = equipo.nickname;
    this. urlName       = equipo.urlName;
    this. confName      = equipo.confName;
    this. divName       = equipo.divName;
  }

}
