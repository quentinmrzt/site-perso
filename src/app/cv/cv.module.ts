import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVRoutingModule } from './cv-routing.module';

import { CVComponent } from './cv.component';
import { PartieGaucheCVComponent } from './partieGauche/partieGaucheCV.component';
import { PartieDroiteCVComponent } from './partieDroite/partieDroiteCV.component';
import { PartieCVComponent } from './partieDroite/partie.component';

@NgModule({
	imports: [
		CommonModule,
		CVRoutingModule
	],
	declarations: [
		CVComponent,
		PartieGaucheCVComponent,
		PartieDroiteCVComponent,
		PartieCVComponent,
	],
})
export class CVModule { }
