import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartieData } from "./partieDroite/data/partieData";

@Component({
	selector: 'cv',
	templateUrl: './app/cv/cv.component.html'
})
export class CVComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
