import {Component, OnInit} from '@angular/core';
import {App, LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import {InicioPage} from "../inicio/inicio";
import {CalendarioProvider} from "../../providers/calendario";
import {EquipoProvider} from "../../providers/equipo";
import {Equipo} from "../../models/equipo";
import {isNumeric} from "rxjs/util/isNumeric";
import {Calendario} from "../../models/calendario";
import {Usuario} from "../../models/usuario";
import {ColorTeam} from "../../models/color-team";
import {JugadorProvider} from "../../providers/jugador";
import {Jugador} from "../../models/jugador";
import {Facebook} from "@ionic-native/facebook";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage implements OnInit {

  /* LinkedIn
   * https://www.djamware.com/post/5971421e80aca7414e78a658/ionic-3-angular-4-and-cordova-linkedin-authentication-tutorial
   *
   * Facebook
   * https://www.djamware.com/post/59ad3a0c80aca768e4d2b135/login-with-ionic-3-and-cordova-native-facebook-connect-plugin
   **/

  jugador: Array<Jugador>;
  color: Array<ColorTeam>;
  user: Usuario;
  calendarioItems: Array<Calendario>;
  equipoItems: Array<Equipo>;

  loader: any;

  isLoggedIn:boolean = false;
  users: any;

  constructor(public navCtrl: NavController, private app : App, public loadingCtrl:LoadingController,
              public googlePlus: GooglePlus, public calendario: CalendarioProvider, public equipo: EquipoProvider,
              public jugadores: JugadorProvider, public toastCtrl: ToastController, public menuCtrl: MenuController,
              private fb: Facebook) {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.close();

    this.fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }

  ionViewDidLoad() {
    console.log('homePage');
  }

  ngOnInit(): void {
    this.color = ColorTeam.allColor();
  }




  login_fb() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }





  login_falso() {
    this.user = new Usuario('01', 'Jose Miguel Duin Garcia', 'josemiguelduin@gmail.com', 'assets/imgs/wallpaper.png', 'google');

    this.getGlobalParams();
  }

  getGlobalParams() {
    this.loader = this.createLoadinEspere();
    this.loader.present();
    this.calendario.getCalendario().subscribe( res => {
      var items = [];
      for( var i in res ) {
        if (isNumeric(i)) {
          let c = new Calendario(res[i], i);
          items.push(c);
        }
      }
      this.calendarioItems = items;

      this.getEquipo();
    }, error => {
      this.loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  getEquipo() {
    this.equipo.getEquipo('2017').subscribe(res => {
      this.equipoItems = res.league.standard;

      this.getJugadores();
    }, error => {
      this.loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  getJugadores() {
    this.jugadores.getJugadores('2017').subscribe(res => {
      this.jugador = res;

      this.irA();
    }, error => {
      this.loader.dismissAll();
      this.presentToast('Servicio no disponible temporalmente.');
    });
  }

  irA() {
    this.loader.dismissAll();
    this.app.getRootNav().setRoot(InicioPage, {
      "usuario": this.user,
      "calendario": this.calendarioItems,
      "equipo": this.equipoItems,
      "jugadores": this.jugador,
      "color": this.color
    });
  }

  login_google() {
    console.log('google init');
    this.googlePlus.login({})
      .then(res => {
        console.log('google init respuesta',res);

        this.user = new Usuario(`${res.userId}`, `${res.displayName}`, `${res.email}`, `${res.imageUrl}`, 'google');

        this.getGlobalParams();
      })
      .catch(err => {
        this.presentToast('Servicio no disponible temporalmente.');
      });
  }

  googleLogOut() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);

      })
      .catch(err => {

      });
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
