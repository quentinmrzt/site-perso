import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CVComponent } from './cv.component';

const cvRoutes: Routes = [
	{ path: 'cv', component: CVComponent },
	{ path: 'cv/competences', component: CVComponent },
	{ path: 'cv/experiences', component: CVComponent },
	{ path: 'cv/formations', component: CVComponent },
	{ path: 'cv/projets', component: CVComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(cvRoutes)
	],
	exports: [
		RouterModule
	]
})
export class CVRoutingModule { }
