import { Component } from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {JuegoDetalle} from "../../../models/juego-detalle";
import {Equipo} from "../../../models/equipo";
import {JuegoDetalleProvider} from "../../../providers/juego-detalle";

/**
 * Generated class for the JugadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugada',
  templateUrl: 'jugada.html',
})
export class JugadaPage {

  juegoDetalle: JuegoDetalle;
  hTeam: Equipo;
  hTeamColor: string;
  vTeam: Equipo;
  vTeamColor: string;
  cuarto: string = '1';
  cuarto_select: string;
  itemsAuxScroll = [];
  paginacion = 0;
  scroll: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public toastCtrl: ToastController,
              public juegoProvider: JuegoDetalleProvider, public loadingCtrl:LoadingController) {
    this.juegoDetalle = this.navParams.data;

    this.hTeam = this.juegoDetalle.equipo.find(e => e.teamId == this.juegoDetalle.juego.hTeam.teamId);
    this.vTeam = this.juegoDetalle.equipo.find(e => e.teamId == this.juegoDetalle.juego.vTeam.teamId);

    this.hTeamColor = this.juegoDetalle.color.find(c => c.teamId == this.hTeam.teamId).color;
    this.vTeamColor = this.juegoDetalle.color.find(c => c.teamId == this.vTeam.teamId).color;

    this.cuarto_select = 'C1';
    this.paginar();

    if (this.juegoDetalle.juego.statusNum == 1) {
      this.presentToast('El partido aún no comienza');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadaPage');
  }

  back() {
    this.app.getRootNav().pop();
  }

  verDescripcionJugada(mgs: string) {
    const toast = this.toastCtrl.create({
      message: mgs,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  changeCuarto(c: string) {
    let loader = this.createLoadinEspere();
    loader.present();
    this.juegoProvider.getJugadas(this.juegoDetalle.juego.startDateEastern, this.juegoDetalle.juego.gameId, c).subscribe( res => {
      this.cuarto = c;
      this.juegoDetalle.jugadas = res;
      this.paginar();
      loader.dismissAll();

      console.log(this.juegoDetalle.jugadas.plays);

    }, error => {
      loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  paginar() {
    this.scroll = true;
    this.itemsAuxScroll = [];
    for (var i = 0; i < 10; i++) {
      if (this.juegoDetalle.jugadas.plays[i]) {
        this.itemsAuxScroll.push(this.juegoDetalle.jugadas.plays[i]);
      } else {
        break;
      }
    }
    console.log(this.itemsAuxScroll);
    this.paginacion = 50;
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      var more = 0;
      for (let i = this.paginacion; i < this.paginacion + 10; i++) {
        if (this.juegoDetalle.jugadas.plays[i]) {
          this.itemsAuxScroll.push(this.juegoDetalle.jugadas.plays[i]);
          more++;
        } else {
          this.scroll = false;
          break;
        }
      }
      this.paginacion = this.paginacion + more;
      infiniteScroll.complete();
    }, 100);
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
