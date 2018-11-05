import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsRoutingModule } from './projets-routing.module';

import { ProjetsComponent } from './projets.component';

@NgModule({
	imports: [
		CommonModule,
		ProjetsRoutingModule
	],
	declarations: [
		ProjetsComponent
	],
})
export class ProjetsModule { }
