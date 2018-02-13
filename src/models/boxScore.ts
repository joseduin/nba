import {Watch} from "./watch";
import {Nugget} from "./nugget";
import {Period} from "./period";
import {GameDuration} from "./game-duration";
import {Arena} from "./arena";
import {Tickets} from "./tickets";

export class BoxScore {

  public basicGameData: BasicGameData;
  public stats: Stats;

  constructor(score: BoxScore) {
    this.stats = score.stats;
    this.basicGameData = score.basicGameData;
  }

}

export class BasicGameData {

  public seasonStageId          : number;
  public seasonYear             : string;
  public gameId                 : string;
  public arena                  : Arena;
  public isGameActivated        : boolean;
  public statusNum              : number;
  public extendedStatusNum      : number;
  public startTimeEastern       : string;
  public startTimeUTC           : string;
  public endTimeUTC             : string;
  public startDateEastern       : string;
  public clock                  : string;
  public isBuzzerBeater         : boolean;
  public isPreviewArticleAvail  : boolean;
  public isRecapArticleAvail    : boolean;
  public tickets                : Tickets;
  public hasGameBookPdf         : boolean;
  public isStartTimeTBD         : boolean;
  public nugget                 : Nugget;
  public attendance             : string;
  public gameDuration           : GameDuration;
  public period                 : Period;
  public vTeam                  : Team;
  public hTeam                  : Team;
  public watch                  : Watch
  public officials              : Officials;

  constructor(juego: BasicGameData) {
    this.seasonStageId          = juego.seasonStageId;
    this.seasonYear             = juego.seasonYear;
    this.gameId                 = juego.gameId;
    this.arena                  = juego.arena;
    this.isGameActivated        = juego.isGameActivated;
    this.statusNum              = juego.statusNum;
    this.extendedStatusNum      = juego.extendedStatusNum;
    this.startTimeEastern       = juego.startTimeEastern;
    this.startTimeUTC           = juego.startTimeUTC;
    this.endTimeUTC             = juego.endTimeUTC;
    this.startDateEastern       = juego.startDateEastern;
    this.clock                  = juego.clock;
    this.isBuzzerBeater         = juego.isBuzzerBeater;
    this.isPreviewArticleAvail  = juego.isPreviewArticleAvail;
    this.isRecapArticleAvail    = juego.isRecapArticleAvail;
    this.tickets                = juego.tickets;
    this.hasGameBookPdf         = juego.hasGameBookPdf;
    this.isStartTimeTBD         = juego.isStartTimeTBD;
    this.nugget                 = juego.nugget;
    this.attendance             = juego.attendance;
    this.gameDuration           = juego.gameDuration;
    this.period                 = juego.period;
    this.vTeam                  = juego.vTeam;
    this.hTeam                  = juego.hTeam;
    this.watch                  = juego.watch;
  }

}

export class Officials {

  public formatted: Array<Formatted>

  constructor(o: Officials) {
    this.formatted = o.formatted;
  }

}

export class Formatted {

  public firstNameLastName : string;

  constructor(f: Formatted) {
    this.firstNameLastName = f.firstNameLastName;
  }
}

export class Stats {

  public timesTied : string;
  public leadChanges : string;
  public vTeam: Team;
  public hTeam: Team;

  constructor(s: Stats) {
    this.timesTied = s.timesTied;
    this.leadChanges = s.leadChanges;
    this.vTeam = s.vTeam;
    this.hTeam = s.hTeam;
  }

}

export class Team {

  public fastBreakPoints : string;
  public pointsInPaint : string;
  public biggestLead : string;
  public secondChancePoints : string;
  public pointsOffTurnovers : string;
  public longestRun : string;
  public leaders: Leaders;

  constructor(t: Team) {
    this.fastBreakPoints = t.fastBreakPoints;
    this.pointsInPaint = t.pointsInPaint;
    this.biggestLead = t.biggestLead;
    this.secondChancePoints = t.secondChancePoints;
    this.pointsOffTurnovers = t.pointsOffTurnovers;
    this.longestRun = t.longestRun;
    this.leaders = t.leaders;
  }

}

export class Leaders {

  public points: Array<Result>;
  public rebounds: Array<Result>;
  public assists: Array<Result>;

  constructor(l: Leaders) {
    this.points = l.points;
    this.rebounds = l.rebounds;
    this.assists = l.assists;
  }

}

export class Result {

  public value : string;
  public players: Person;

  constructor(r: Result) {
    this.value = r.value;
    this.players = r.players;
  }

}

export class Person {

  public personId: string;

  constructor(p: Person) {
    this.personId = p.personId;
  }

}

