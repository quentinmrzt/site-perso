import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesRoutingModule } from './experiences-routing.module';

import { ExperiencesComponent } from './experiences.component';
import { ChronologieExperiencesComponent } from './chronologieExperiences.component';

@NgModule({
	imports: [
		CommonModule,
		ExperiencesRoutingModule
	],
	declarations: [
		ExperiencesComponent,
		ChronologieExperiencesComponent
	],
})
export class ExperiencesModule { }
