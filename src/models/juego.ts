import {Arena} from "./arena";
import {Tickets} from "./tickets";
import {Nugget} from "./nugget";
import {GameDuration} from "./game-duration";
import {Period} from "./period";
import {Team} from "./team";
import {Watch} from "./watch";

export class Juego {

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
  public watch                  : Watch;

  constructor(juego: Juego) {
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
