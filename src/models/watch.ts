import {Broadcast} from "./broadcast";

export class Watch {

  public broadcast : Broadcast;

  constructor(watch: Watch) {
    this.broadcast = watch.broadcast;
  }

}
