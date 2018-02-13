import {Component, ViewChild} from '@angular/core';
import {AlertController, Events, Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {Usuario} from "../models/usuario";
import {GooglePlus} from "@ionic-native/google-plus";

@Component({
  templateUrl: 'app.html',
  providers: [GooglePlus]
})
export class MyApp {

  user: Usuario;
  rootPage:any = HomePage;
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events: Events, public alertCtrl: AlertController,
              public googlePlus: GooglePlus) {
    platform.ready().then(() => {

      events.subscribe('user:created', userEventData => {
        this.user = userEventData;
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Cerrar Sesión',
      subTitle: '',
      cssClass: '',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salir',
          handler: () => {

            if (this.user.tipo == 'google') {
              this.googleLogOut();
            } else {
              this.nav.setRoot(HomePage);
            }
          }
        }
      ]
    });
    confirm.present();
  }

  googleLogOut() {
    //this.nav.setRoot(HomePage);

    this.googlePlus.logout()
      .then(res => {
        console.log('google OUT', res);
        this.nav.setRoot(HomePage);

      })
      .catch(err => {

      });
  }

}


