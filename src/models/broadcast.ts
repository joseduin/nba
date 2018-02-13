import {Broadcasters} from "./broadcasters";

export class Broadcast {

  public broadcasters : Broadcasters;

  constructor(broadcast: Broadcast) {
    this.broadcasters = broadcast.broadcasters;
  }

}
