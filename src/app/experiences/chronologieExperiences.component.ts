import { Component, OnInit } from '@angular/core';
import { SectionData } from '../cv/data/sectionData';
import { SECTIONEXPERIENCES } from '../cv/data/mock-sectionExperiences';

@Component({
	selector: 'chronologie-experiences',
	templateUrl: './app/chronologie.component.html'
})
export class ChronologieExperiencesComponent implements OnInit {
	private sections: SectionData[];

	ngOnInit(): void {
    this.sections = SECTIONEXPERIENCES;
  }
}
