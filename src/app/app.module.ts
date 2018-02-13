import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InicioPage} from "../pages/inicio/inicio";
import { CalendarioProvider } from '../providers/calendario';
import { GenericProvider } from '../providers/generic/generic';
import { EquipoProvider } from '../providers/equipo';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from "../pipes/date/date";
import { MarcadorProvider } from '../providers/marcador';
import {DetallePage} from "../pages/detalle-juego/detalle/detalle";
import {JugadaPage} from "../pages/detalle-juego/jugada/jugada";
import {EntrenamientoPage} from "../pages/detalle-juego/entrenamiento/entrenamiento";
import { JugadorProvider } from '../providers/jugador';
import {NumeroPipe} from "../pipes/numero/numero";
import { JuegoDetalleProvider } from '../providers/juego-detalle';
import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    DetallePage,
    JugadaPage,
    EntrenamientoPage,
    DatePipe,
    NumeroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Novienbre', 'Diciembre'],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    DetallePage,
    JugadaPage,
    EntrenamientoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    NumeroPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalendarioProvider,
    GenericProvider,
    EquipoProvider,
    MarcadorProvider,
    JugadorProvider,
    JuegoDetalleProvider,
    Facebook
  ]
})
export class AppModule {}
