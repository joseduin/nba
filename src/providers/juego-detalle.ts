import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";

@Injectable()
export class JuegoDetalleProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JuegoDetalleProvider Provider');
  }

  getCajaMarcador(date: string, gameId: string) {
    return this.http.get(`v1/${date}/${gameId}_boxscore.json`)

//    return this.http.get(`http://data.nba.net/data/prod/v1/${date}/${gameId}_boxscore.json`)
    // .map(this.extractData)
      .catch(this.handleError);
  }

  getJugadas(date: string, gameId: string, c: string) {
    return this.http.get(`v1/${date}/${gameId}_pbp_${c}.json`)

//    return this.http.get(`http://data.nba.net/data/prod/v1/${date}/${gameId}_pbp_${c}.json`)
    // .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
