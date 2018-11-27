import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationsRoutingModule } from './formations-routing.module';

import { FormationsComponent } from './formations.component';
import { ChronologieComponent } from './chronologie.component';

@NgModule({
	imports: [
		CommonModule,
		FormationsRoutingModule
	],
	declarations: [
		FormationsComponent,
		ChronologieComponent
	],
})
export class FormationsModule { }
