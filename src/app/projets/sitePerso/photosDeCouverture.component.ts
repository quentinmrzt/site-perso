import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PhotoData } from './photo';
import { DONNEEPHOTOS } from './mock-photos';

@Component({
	selector: 'projet-site-perso',
	templateUrl: './app/projets/sitePerso/photosDeCouverture.component.html'
})
export class ProjetSitePersoComponent implements OnInit {

	private photos:PhotoData[] = DONNEEPHOTOS;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.initLocalClocks();
	}

	private getHeure() {
		let date = new Date;
	  let secondes = date.getSeconds();
	  let minutes = date.getMinutes();
	  let heures = date.getHours();

		let angleHeures = (heures*30) + (minutes / 2);
		let angleMinutes = minutes*6;
		let angleSeconde = secondes*6;


	}

	private initLocalClocks() {
	  /*for (var j = 0; j < aiguilles.length; j++) {
	    var elements = document.querySelectorAll('.' + aiguilles[j].aiguille);
	    for (var k = 0; k < elements.length; k++) {
	        elements[k].style.webkitTransform = 'rotateZ('+ aiguilles[j].angle +'deg)';
	        elements[k].style.transform = 'rotateZ('+ aiguilles[j].angle +'deg)';
	        // If this is a minute aiguille, note the seconds position (to calculate minute position later)
	        if (aiguilles[j].aiguille === 'minutes') {
	          elements[k].parentNode.setAttribute('data-second-angle', aiguilles[j + 1].angle);
	        }
	    }
	  }*/
	}







}
