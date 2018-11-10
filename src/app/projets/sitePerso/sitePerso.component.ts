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

	}
}
