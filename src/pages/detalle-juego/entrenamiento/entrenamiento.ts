import {Component, OnInit} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {JuegoDetalle} from "../../../models/juego-detalle";
import {Equipo} from "../../../models/equipo";
import {DetalleMarcador} from "../../../models/detalle-marcador";

@IonicPage()
@Component({
  selector: 'page-entrenamiento',
  templateUrl: 'entrenamiento.html',
})
export class EntrenamientoPage implements OnInit {

  juegoDetalle: JuegoDetalle;
  hTeam: Equipo;
  hTeamColor: string;
  vTeam: Equipo;
  vTeamColor: string;

  score: Array<DetalleMarcador>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.juegoDetalle = this.navParams.data;

    this.hTeam = this.juegoDetalle.equipo.find(e => e.teamId == this.juegoDetalle.juego.hTeam.teamId);
    this.vTeam = this.juegoDetalle.equipo.find(e => e.teamId == this.juegoDetalle.juego.vTeam.teamId);

    this.hTeamColor = this.juegoDetalle.color.find(c => c.teamId == this.hTeam.teamId).color;
    this.vTeamColor = this.juegoDetalle.color.find(c => c.teamId == this.vTeam.teamId).color;

    if (this.juegoDetalle.juego.statusNum != 1) {
      this.cargarMarcador();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrenamientoPage');
  }

  ngOnInit(): void {
  }

  cargarMarcador() {
    var score = [];
    for (var i = 0; i < 4; i++) {
      score.push(new DetalleMarcador( `C${i + 1}`, `${this.juegoDetalle.juego.vTeam.linescore[i].score}`, `${this.juegoDetalle.juego.hTeam.linescore[i].score}` ));
    }
    if (this.juegoDetalle.juego.period.current > 4) {
      score.push(new DetalleMarcador( `PRÓ`, `${this.juegoDetalle.juego.vTeam.linescore[4].score}`, `${this.juegoDetalle.juego.hTeam.linescore[4].score}` ));
    }
    score.push(new DetalleMarcador( `TOT`, `${this.juegoDetalle.juego.vTeam.score}`, `${this.juegoDetalle.juego.hTeam.score}` ));

    this.score = score;
  }

  back() {
    this.app.getRootNav().pop();
  }

  buscarNombreJugador(personId: string): string {
    var j = this.juegoDetalle.jugador.find(j => j.personId == personId);
    return j == undefined ? '' : j.name;
  }

}
