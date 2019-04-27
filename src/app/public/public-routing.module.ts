import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, data: {animation: 'AccueilPage'} },
  { path: 'formations', component: FormationsComponent, data: {animation: 'FormationsPage'} },
  { path: 'experiences', component: ExperiencesComponent, data: {animation: 'ExperiencesPage'} },
  { path: 'projets', component: ProjetsComponent, data: {animation: 'ProjetsPage'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
