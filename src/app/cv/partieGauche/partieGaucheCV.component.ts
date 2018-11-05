import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PartieData } from "../partieDroite/data/partieData";
import { SECTIONPARTIESDATA } from "../partieDroite/data/mock-partiesData";

@Component({
	selector: 'partie-gauche-cv',
	templateUrl: './app/cv/partieGauche/partieGaucheCV.component.html'
})
export class PartieGaucheCVComponent {
	public parties: PartieData[];

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.parties = SECTIONPARTIESDATA;
	}
}
