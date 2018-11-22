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

	private heureJour:string = "07h55";
	private heureNuit:string = "16h48";

	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
