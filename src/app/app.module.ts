import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CVModule } from './cv/cv.module'
import { FormationsModule } from './formations/formations.module'
import { ExperiencesModule } from './experiences/experiences.module'
import { ProjetsModule } from './projets/projets.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { CouleurBorderDirective } from './couleur.directive';
import { CouvertureDirective } from './couverture.directive';


@NgModule({
	imports: [
		BrowserModule,
		CVModule,
		FormationsModule,
		ExperiencesModule,
		ProjetsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		CouleurBorderDirective,
		CouvertureDirective
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
