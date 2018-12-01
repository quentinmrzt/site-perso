import { Component } from '@angular/core';
import { slideInAnimation } from './animations';

@Component({
  selector: 'site-perso',
  templateUrl: './app/app.component.html',
	animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
