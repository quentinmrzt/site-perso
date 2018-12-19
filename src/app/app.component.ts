import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
  selector: 'site-perso',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {

  menuOuvert: boolean = false;

  ngOnInit(): void {
    if(window.innerWidth >= 768) {
      this.menuOuvert = true;
    } else {
      this.menuOuvert = false;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  cliqueSurLeMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth >= 768) {
      this.menuOuvert = true;
    } else {
      this.menuOuvert = false;
    }
  }
}
