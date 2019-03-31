import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitePersoComponent } from './site-perso/site-perso.component';
import { PhotosDeCouvertureComponent } from './photos-de-couverture/photos-de-couverture.component';

const routes: Routes = [
  { path: 'projet/siteperso', component: SitePersoComponent, data: {animation: 'SitePersoPage'} },
  { path: 'projet/photosdecouverture', component: PhotosDeCouvertureComponent, data: {animation: 'PhotosDeCouverturePage'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
