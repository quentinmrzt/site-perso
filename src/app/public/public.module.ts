import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjetsModule } from './projets/projets.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    AccueilComponent,
    CompetencesComponent,
    ExperiencesComponent,
    FormationsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    ProjetsModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
