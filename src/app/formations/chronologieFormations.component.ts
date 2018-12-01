import { Component, OnInit } from '@angular/core';
import { SectionData } from '../data/sectionData';
import { SECTIONFORMATIONS } from '../data/mock-sectionFormations';

@Component({
	selector: 'chronologie-formations',
	templateUrl: './app/chronologie.component.html',
	styleUrls: ['./app/chronologie.component.css']
})
export class ChronologieFormationsComponent implements OnInit {
	private sections: SectionData[];

	ngOnInit(): void {
    this.sections = SECTIONFORMATIONS;
  }
}
