import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
	selector: 'site-perso',
	templateUrl: './app/app.component.html',
	animations: [fadeAnimation]
})
export class AppComponent {

}
