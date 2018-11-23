import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVRoutingModule } from './cv-routing.module';

import { CVComponent } from './cv.component';
import { PartieCVComponent } from './partie.component';

@NgModule({
	imports: [
		CommonModule,
		CVRoutingModule
	],
	declarations: [
		CVComponent,
		PartieCVComponent
	],
})
export class CVModule { }
