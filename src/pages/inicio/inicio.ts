import { Component } from '@angular/core';
import {
  App, Events, IonicPage, LoadingController, MenuController, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import {Usuario} from "../../models/usuario";
import {Equipo} from "../../models/equipo";
import {Calendario} from "../../models/calendario";
import {DatePipe} from "../../pipes/date/date";
import {MarcadorProvider} from "../../providers/marcador";
import {Juego} from "../../models/juego";
import {ColorTeam} from "../../models/color-team";
import {DetallePage} from "../detalle-juego/detalle/detalle";
import {Jugador} from "../../models/jugador";
import {BoxScore} from "../../models/boxScore";
import {JuegoDetalleProvider} from "../../providers/juego-detalle";
import {Jugadas} from "../../models/jugadas";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  fecha: String = new Date().toISOString();
  fecha_maxima: string;
  fecha_minima: string;
  resultado: string = 'Parditos';
  refresh: boolean = false;

  jugadas: Array<Jugadas>;
  boxScore: BoxScore;
  jugador: Array<Jugador>;
  color: Array<ColorTeam>;
  juegos: Array<Juego>;
  user: Usuario;
  calendarioItems: Array<Calendario>;
  equipoItems: Array<Equipo>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePipe: DatePipe, public app: App,
              public marcador: MarcadorProvider, public juegoProvider: JuegoDetalleProvider, public menuCtrl: MenuController,
              public toastCtrl: ToastController, public loadingCtrl:LoadingController, public events: Events) {
    this.menuCtrl.swipeEnable(false);

    this.user = this.navParams.get("usuario");
    this.calendarioItems = this.navParams.get("calendario");
    this.equipoItems = this.navParams.get("equipo");
    this.color = this.navParams.get("color");
    this.jugador = this.navParams.get("jugadores");

    events.publish('user:created', this.user);
    this.presentToast('Bienvenido '+ this.user.nombres);

    this.fecha_minima = this.datePipe.transform(this.calendarioItems[0].fecha, 'COMPACTO to DATE_PICKER');
    this.fecha_maxima = this.datePipe.transform(this.calendarioItems[this.calendarioItems.length - 1].fecha, 'COMPACTO to DATE_PICKER');

    let fecha_compacto = this.datePipe.transform(`${this.fecha}`, 'DATE_PICKER to COMPACTO');
    this.buscarMarcador(fecha_compacto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  ionViewWillEnter() {
    if (this.refresh) {
      this.changeCalendar();
    }
    this.refresh = true;

  }

  doRefresh(refresher) {
    setTimeout(() => {

      this.changeCalendar();

      refresher.complete();
    }, 2000);
  }

  changeCalendar() {
    let fecha_compacto = this.datePipe.transform(`${this.fecha}`, 'DATE_PICKER to COMPACTO');
    this.buscarMarcador(fecha_compacto);
  }

  buscarMarcador(fecha: string) {
    let loader = this.createLoadinEspere();
    loader.present();
    this.marcador.getMarcador(fecha).subscribe(res => {
      if (res.numGames == 0) {
        this.resultado = 'No hay Partidos';

      } else {
        this.resultado = `${res.numGames} Partidos`;
        this.juegos = res.games;
      }
      loader.dismissAll();

    }, error => {
      loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  verDetalle(j: Juego) {
    let loader = this.createLoadinEspere();
    loader.present();
    this.juegoProvider.getCajaMarcador(j.startDateEastern, j.gameId).subscribe(res => {
      this.boxScore = res;

      this.buscarJugadas(j, loader);
    }, error => {
      loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  buscarJugadas(j: Juego, loader: any) {
    this.juegoProvider.getJugadas(j.startDateEastern, j.gameId, '1').subscribe(res => {
      this.jugadas = res;

      loader.dismissAll();
      this.abrirDetalle(j);
    }, error => {
      loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  abrirDetalle(j: Juego) {
    this.app.getRootNav().push(DetallePage,{
      "juego": j,
      "jugadores": this.jugador,
      "color": this.color,
      "equipos": this.equipoItems,
      "boxScore": this.boxScore,
      "jugadas": this.jugadas
    });
  }

  buscarNombreEquipo(teamId: string): string {
    return this.equipoItems.find(e => e.teamId == teamId).fullName;
  }

  ganador(t1:any, t2:any): string {
    return Number(t1) > Number(t2) ? 'marcador-win' : 'marcador';
  }

  createLoadinEspere() {
    return this.loadingCtrl.create({
      content: "Por favor espere...",
    });
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
