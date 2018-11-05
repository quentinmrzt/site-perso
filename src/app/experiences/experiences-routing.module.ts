import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperiencesComponent } from './experiences.component';

const cvRoutes: Routes = [
	{ path: 'experiences', component: ExperiencesComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(cvRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ExperiencesRoutingModule { }
