import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";

/*
  Generated class for the EquipoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EquipoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EquipoProvider Provider');
  }

  getEquipo(year: string) {
    //return this.http.get(`http://data.nba.net/data/prod/v1/${year}/teams.json`)

    return this.http.get(`v1/${year}/teams.json`)
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
