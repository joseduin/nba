import {Juego} from "./juego";
import {Jugador} from "./jugador";
import {ColorTeam} from "./color-team";
import {Equipo} from "./equipo";
import {BoxScore} from "./boxScore";
import {Jugadas} from "./jugadas";

export class JuegoDetalle {

  public jugador: Array<Jugador>;
  public color  : Array<ColorTeam>;
  public juego  : Juego;
  public equipo : Array<Equipo>;
  public boxScore: BoxScore;
  public jugadas: Jugadas;

  constructor(detalle: JuegoDetalle) {
    this.jugador= detalle.jugador;
    this.color  = detalle.color;
    this.juego  = detalle.juego;
    this.equipo = detalle.equipo;
    this.boxScore = detalle.boxScore;
    this.jugadas = detalle.jugadas;
  }

}
