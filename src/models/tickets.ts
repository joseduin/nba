export class Tickets {

  public mobileApp  : string;
  public desktopWeb : string;
  public mobileWeb  : string;

  constructor(tickets: Tickets) {
    this.mobileApp  = tickets.mobileApp;
    this.desktopWeb = tickets.desktopWeb;
    this.mobileWeb  = tickets.mobileWeb;
  }

}
