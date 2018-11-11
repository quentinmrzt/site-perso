import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PhotoData } from './photo';
import { DONNEEPHOTOS } from './mock-photos';

@Component({
	selector: 'projet-site-perso',
	templateUrl: './app/projets/sitePerso/sitePerso.component.html'
})
export class ProjetSitePersoComponent implements OnInit {

	private photos:PhotoData[] = DONNEEPHOTOS;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.initLocalClocks();
	}



	/*
	 * Starts any clocks using the user's local time
	 * From: cssanimation.rocks/clocks
	 */
	private initLocalClocks() {
	  // Get the local time using JS
	  var date = new Date;
	  var seconds = date.getSeconds();
	  var minutes = date.getMinutes();
	  var hours = date.getHours();

	  var aiguilles = [
	    {
	      aiguille: 'hours',
	      angle: (hours * 30) + (minutes / 2)
	    },
	    {
	      aiguille: 'minutes',
	      angle: (minutes * 6)
	    },
	    {
	      aiguille: 'seconds',
	      angle: (seconds * 6)
	    }
	  ];

	  for (var j = 0; j < aiguilles.length; j++) {
	    var elements = document.querySelectorAll('.' + aiguilles[j].aiguille);
	    for (var k = 0; k < elements.length; k++) {
	        elements[k].style.webkitTransform = 'rotateZ('+ aiguilles[j].angle +'deg)';
	        elements[k].style.transform = 'rotateZ('+ aiguilles[j].angle +'deg)';
	        // If this is a minute aiguille, note the seconds position (to calculate minute position later)
	        if (aiguilles[j].aiguille === 'minutes') {
	          elements[k].parentNode.setAttribute('data-second-angle', aiguilles[j + 1].angle);
	        }
	    }
	  }
	}







}
