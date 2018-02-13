export class ColorTeam {

  public teamId: string;
  public color : string;

  constructor(teamId: string, color: string) {
    this.teamId= teamId;
    this.color = color;
  }

  static allColor(): Array<ColorTeam> {
    var c = [];
    c.push(new ColorTeam('1610612737', '#E13A3E'));
    c.push(new ColorTeam('1610612738', '#007239'));
    c.push(new ColorTeam('15017', '#A1A1A4'));
    c.push(new ColorTeam('1610612751', '#000000'));
    c.push(new ColorTeam('1610612766', '#1D1160'));
    c.push(new ColorTeam('1610612741', '#C60033'));
    c.push(new ColorTeam('1610612739', '#B2004A'));
    c.push(new ColorTeam('1610612742', '#0063AF'));
    c.push(new ColorTeam('1610612743', '#559FD6'));
    c.push(new ColorTeam('1610612744', '#0068B3'));
    c.push(new ColorTeam('15018', '#A1A1A4'));
    c.push(new ColorTeam('93', '#A1A1A4'));
    c.push(new ColorTeam('1610612745', '#C60033'));
    c.push(new ColorTeam('1610612754', '#FFC633'));
    c.push(new ColorTeam('1610612746', '#006BB6'));
    c.push(new ColorTeam('1610612747', '#FEA927'));
    c.push(new ColorTeam('15016', '#A1A1A4'));
    c.push(new ColorTeam('1610612763', '#bed4e9'));
    c.push(new ColorTeam('1610612748', '#98002E'));
    c.push(new ColorTeam('1610612749', '#00471B'));
    c.push(new ColorTeam('1610612750', '#3B6A8E'));
    c.push(new ColorTeam('1610612740', '#002B5C'));
    c.push(new ColorTeam('1610612752', '#F3571F'));
    c.push(new ColorTeam('1610612760', '#FDBB30'));
    c.push(new ColorTeam('1610612753', '#006BB7'));
    c.push(new ColorTeam('1610612755', '#EC003D'));
    c.push(new ColorTeam('1610612756', '#E4491D'));
    c.push(new ColorTeam('1610612757', '#DE2032'));
    c.push(new ColorTeam('1610612758', '#5B2B82'));
    c.push(new ColorTeam('1610612759', '#BAC4CA'));
    c.push(new ColorTeam('12329', '#A1A1A4'));
    c.push(new ColorTeam('15015', '#A1A1A4'));
    c.push(new ColorTeam('1610616833', '#A1A1A4'));
    c.push(new ColorTeam('1610616834', '#A1A1A4'));
    c.push(new ColorTeam('1610612761', '#CE1141'));
    c.push(new ColorTeam('1610616843', '#A1A1A4'));
    c.push(new ColorTeam('1610612762', '#002B5C'));
    c.push(new ColorTeam('1610612764', '#E21836'));
    c.push(new ColorTeam('1610616844', '#A1A1A4'));
    c.push(new ColorTeam('1610612765', '#EC003D'));

    return c;
  }

}
