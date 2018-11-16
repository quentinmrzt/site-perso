import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsRoutingModule } from './projets-routing.module';

import { ProjetsComponent } from './projets.component';
import { ProjetSitePersoComponent } from './sitePerso/photosDeCouverture.component';
import { HorlogeDirective } from './sitePerso/horloge.directive';

@NgModule({
	imports: [
		CommonModule,
		ProjetsRoutingModule
	],
	declarations: [
		ProjetsComponent,
		ProjetSitePersoComponent,
		HorlogeDirective
	],
})
export class ProjetsModule { }
