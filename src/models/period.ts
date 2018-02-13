export class Period {

  public current      : number;
  public type         : number;
  public maxRegular   : number;
  public isHalftime   : boolean;
  public isEndOfPeriod: boolean;

  constructor(period: Period) {
    this.current      = period.current;
    this.type         = period.type;
    this.maxRegular   = period.maxRegular;
    this.isHalftime   = period.isHalftime;
    this.isEndOfPeriod= period.isEndOfPeriod;
  }

}
