import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesComponent } from './competences.component';

@NgModule({
	imports: [
		CommonModule,
		CompetencesRoutingModule
	],
	declarations: [
		CompetencesComponent
	],
})
export class CompetencesModule { }
