import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetsComponent } from './projets.component';
import { ProjetSitePersoComponent } from './sitePerso/photosDeCouverture.component';

const cvRoutes: Routes = [
	{ path: 'projets', component: ProjetsComponent, data: {animation: 'ProjetsPage'} },
	{ path: 'projet/photosDeCouverture', component: ProjetSitePersoComponent, data: {animation: 'PhotosDeCouverturePage'} },
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
