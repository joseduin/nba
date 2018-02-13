import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EntrenamientoPage} from "../entrenamiento/entrenamiento";
import {JugadaPage} from "../jugada/jugada";
import {Juego} from "../../../models/juego";
import {ColorTeam} from "../../../models/color-team";
import {Jugador} from "../../../models/jugador";
import {Equipo} from "../../../models/equipo";
import {BoxScore} from "../../../models/boxScore";
import {Jugadas} from "../../../models/jugadas";

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  entrenamientoRoot: any = EntrenamientoPage;
  jugadaRoot: any = JugadaPage;

  jugadas: Array<Jugadas>;
  boxScore: BoxScore;
  equipoItems: Array<Equipo>;
  jugador: Array<Jugador>;
  color: Array<ColorTeam>;
  juego: Juego;
  juegoDetalle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.juego = this.navParams.get("juego");
    this.jugador = this.navParams.get("jugadores");
    this.color = this.navParams.get("color");
    this.equipoItems = this.navParams.get("equipos");
    this.boxScore = this.navParams.get("boxScore");
    this.jugadas = this.navParams.get("jugadas");

    this.getTeamColor();
    this.getTeam();
    this.juegoDetalle = { 'jugador': this.jugador,
                          'color': this.color,
                          'juego': this.juego,
                          'equipo': this.equipoItems,
                          'boxScore': this.boxScore,
                          'jugadas': this.jugadas
    };
  }

  getTeamColor() {
    var colorAux = [];
    var colorsito = this.color.find(c => c.teamId == this.juego.hTeam.teamId);
    colorAux.push( colorsito == undefined ? new ColorTeam(this.juego.hTeam.teamId, '#A1A1A4') : colorsito );

    colorsito = this.color.find(c => c.teamId == this.juego.vTeam.teamId);
    colorAux.push( colorsito == undefined ? new ColorTeam(this.juego.hTeam.teamId, '#A1A1A4') : colorsito );

    this.color = colorAux;
  }

  getTeam() {
    var team = [];
    team.push( this.equipoItems.find(t => t.teamId == this.juego.hTeam.teamId) );
    team.push( this.equipoItems.find(t => t.teamId == this.juego.vTeam.teamId) );

    this.equipoItems = team;
  }

}
