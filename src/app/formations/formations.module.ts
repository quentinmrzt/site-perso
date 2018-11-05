import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationsRoutingModule } from './formations-routing.module';

import { FormationsComponent } from './formations.component';

@NgModule({
	imports: [
		CommonModule,
		FormationsRoutingModule
	],
	declarations: [
		FormationsComponent
	],
})
export class FormationsModule { }
