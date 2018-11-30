import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences.component';

const cvRoutes: Routes = [
	{ path: 'competences', component: CompetencesComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(cvRoutes)
	],
	exports: [
		RouterModule
	]
})
export class CompetencesRoutingModule { }
