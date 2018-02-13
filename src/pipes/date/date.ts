import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {

  transform(value: string, args: string) {
    let arg = args.split(' to ');
    if (arg.length > 1) {
      switch (arg[0]) {
        case "COMPACTO":
          switch (arg[1]) {
            case "DATE_PICKER":
              return this.compactoToDatePicker(value);
            case "ISO":
              return this.compactoToIso8601(value);
             case "HUMAN":
               return this.compactoToHuman(value);
          }
        case "DATE_PICKER":
          switch (arg[1]) {
            case "COMPACTO":
              return this.datePickerToCompacto(value);
          }
      }
    }
  }

  private compactoToDatePicker(fecha: string): string {
    return fecha.substr(0, 4) + "-" + fecha.substr(4, 2) + "-" + fecha.substr(6, 2);
  }

  private datePickerToCompacto(fecha: string): string {
    return fecha.substr(0, 4) + fecha.substr(5, 2) + fecha.substr(8, 2);
  }

  private compactoToIso8601(fecha: string): string {
    return fecha.substr(0, 4) + "-" + fecha.substr(4, 2) + "-" + fecha.substr(6, 2) + " T03:44:10.540Z";
  }

  private compactoToHuman(fecha: string): string {
    return fecha.substr(4, 2) + "/" + fecha.substr(6, 2) + "/" + fecha.substr(0, 4);
  }

}


