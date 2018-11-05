import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationsComponent } from './formations.component';

const cvRoutes: Routes = [
	{ path: 'formations', component: FormationsComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(cvRoutes)
	],
	exports: [
		RouterModule
	]
})
export class FormationsRoutingModule { }
