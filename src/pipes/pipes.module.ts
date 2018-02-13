import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { NumeroPipe } from './numero/numero';
@NgModule({
	declarations: [DatePipe,
    NumeroPipe],
	imports: [],
	exports: [DatePipe,
    NumeroPipe]
})
export class PipesModule {}
