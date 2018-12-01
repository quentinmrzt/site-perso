import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CVComponent } from './cv.component';

const cvRoutes: Routes = [
	{ path: 'cv', component: CVComponent, data: {animation: 'CVPage'} },
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
