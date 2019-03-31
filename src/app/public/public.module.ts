import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProjetsRoutingModule } from './projets/projets-routing.module';
import { PublicRoutingModule } from './public-routing.module';

import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsModule } from './projets/projets.module';

@NgModule({
  declarations: [
    CompetencesComponent,
    ExperiencesComponent,
    FormationsComponent,
    FormationsComponent,
    PageNotFoundComponent,
    AccueilComponent,
  ],
  imports: [
    SharedModule,
    ProjetsRoutingModule,
    PublicRoutingModule,
    ProjetsModule,
  ]
})
export class PublicModule { }
