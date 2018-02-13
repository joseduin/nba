import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NumeroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'numero',
})
export class NumeroPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let numero = String(value);
    let res = "";
    let c = "";

    let cont = 0, mult = 1;
    for(let i = numero.length; i > 0; i--){
      res = res.concat(numero.substring(i - 1, i));
      cont++;

      if(cont == 3 * mult && 3 * mult < numero.length){
        res = res.concat(".");
        mult++;
      }
    }
    for(let i = res.length; i>0; i--){
      c = c.concat(res.substring(i-1, i));
    }
    return c;
  }
}
