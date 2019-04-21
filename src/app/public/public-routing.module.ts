import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { ProjetsComponent } from './projets/projets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SitePersoComponent } from './projets/site-perso/site-perso.component';
import { PhotosDeCouvertureComponent } from './projets/photos-de-couverture/photos-de-couverture.component';

//import { SitePersoComponent } from './projets/site-perso/site-perso.component';

const routes: Routes = [
  { path: 'competences', component: CompetencesComponent, data: {animation: 'CompetencesPage'} },
  { path: 'accueil', component: AccueilComponent, data: {animation: 'AccueilPage'} },
  { path: 'experiences', component: ExperiencesComponent, data: {animation: 'ExperiencesPage'} },
  { path: 'formations', component: FormationsComponent, data: {animation: 'FormationsPage'} },
  { path: 'projets', component: ProjetsComponent, data: {animation: 'ProjetsPage'} },
  { path: 'projet/siteperso', component: SitePersoComponent, data: {animation: 'SitePersoPage'} },
  { path: 'projet/photosdecouverture', component: PhotosDeCouvertureComponent, data: {animation: 'PhotosDeCouverturePage'} },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
