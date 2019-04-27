import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProjetsComponent } from './projets.component';
import { ProjetsRoutingModule } from './projets-routing.module';
import { PhotosDeCouvertureComponent } from './photos-de-couverture/photos-de-couverture.component';
import { CadranDirective } from './photos-de-couverture/cadran.directive';
import { SitePersoComponent } from './site-perso/site-perso.component';

@NgModule({
  declarations: [
    ProjetsComponent,
    PhotosDeCouvertureComponent,
    SitePersoComponent,
    CadranDirective,
  ],
  imports: [
    SharedModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
