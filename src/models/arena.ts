export class Arena {

  public name       : string;
  public isDomestic : boolean;
  public city       : string;
  public stateAbbr  : string;
  public country    : string;

  constructor(arena: Arena) {
    this.name       = arena.name;
    this.isDomestic = arena.isDomestic;
    this.city       = arena.city;
    this.stateAbbr  = arena.stateAbbr;
    this.country    = arena.country;
  }

}
