import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetsComponent } from './projets.component';

const cvRoutes: Routes = [
	{ path: 'projets', component: ProjetsComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(cvRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ProjetsRoutingModule { }
