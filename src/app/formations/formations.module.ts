import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationsRoutingModule } from './formations-routing.module';

import { FormationsComponent } from './formations.component';
import { ChronologieFormationsComponent } from './chronologieFormations.component';

@NgModule({
	imports: [
		CommonModule,
		FormationsRoutingModule
	],
	declarations: [
		FormationsComponent,
		ChronologieFormationsComponent
	],
})
export class FormationsModule { }
