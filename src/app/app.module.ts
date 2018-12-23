import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CVModule } from './cv/cv.module'
import { FormationsModule } from './formations/formations.module'
import { ExperiencesModule } from './experiences/experiences.module'
import { CompetencesModule } from './competences/competences.module'
import { ProjetsModule } from './projets/projets.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { CouleurBorderDirective } from './couleur.directive';
import { CouvertureDirective } from './couverture.directive';
import { MenuDirective } from './menu.directive';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CVModule,
		FormationsModule,
		ExperiencesModule,
		CompetencesModule,
		ProjetsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		CouleurBorderDirective,
		CouvertureDirective,
		MenuDirective
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
