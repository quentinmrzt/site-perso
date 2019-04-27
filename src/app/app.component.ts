import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'site-perso',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  private menuOuvert: boolean = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  cliqueMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

  getOuvert() {
    return "flex";
  }
}
