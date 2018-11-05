import { Component, OnInit } from '@angular/core';
import { PartieData } from './data/partieData';
import { SECTIONPARTIESDATA } from './data/mock-partiesData';

@Component({
	selector: 'partie-cv',
	templateUrl: './app/cv/partieDroite/partie.component.html'
})
export class PartieCVComponent implements OnInit {
	private parties: PartieData[];

	ngOnInit(): void {
    this.parties = SECTIONPARTIESDATA;
  }
}
