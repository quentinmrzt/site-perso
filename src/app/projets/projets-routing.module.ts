import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetsComponent } from './projets.component';
import { ProjetSitePersoComponent } from './sitePerso/photosDeCouverture.component';

const cvRoutes: Routes = [
	{ path: 'projets', component: ProjetsComponent },
	{ path: 'projet/photosDeCouverture', component: ProjetSitePersoComponent },
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
