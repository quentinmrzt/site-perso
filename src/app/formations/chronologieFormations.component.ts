import { Component, OnInit } from '@angular/core';
import { SectionData } from '../cv/data/sectionData';
import { SECTIONFORMATIONS } from '../cv/data/mock-sectionFormations';

@Component({
	selector: 'chronologie-formations',
	templateUrl: './app/chronologie.component.html'
})
export class ChronologieFormationsComponent implements OnInit {
	private sections: SectionData[];

	ngOnInit(): void {
    this.sections = SECTIONFORMATIONS;
  }
}
