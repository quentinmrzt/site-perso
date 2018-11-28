import { Component, OnInit } from '@angular/core';
import { SectionData } from '../cv/data/sectionData';
import { SECTIONFORMATIONS } from '../cv/data/mock-sectionFormations';

@Component({
	selector: 'chronologie',
	templateUrl: './app/formations/chronologie.component.html'
})
export class ChronologieComponent implements OnInit {
	private formations: SectionData[];
	private afficher: boolean = false;

	ngOnInit(): void {
    this.formations = SECTIONFORMATIONS;
  }
}
