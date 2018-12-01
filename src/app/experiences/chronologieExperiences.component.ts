import { Component, OnInit } from '@angular/core';
import { SectionData } from '../data/sectionData';
import { SECTIONEXPERIENCES } from '../data/mock-sectionExperiences';

@Component({
	selector: 'chronologie-experiences',
	templateUrl: './app/chronologie.component.html',
	styleUrls: ['./app/chronologie.component.css']
})
export class ChronologieExperiencesComponent implements OnInit {
	private sections: SectionData[];

	ngOnInit(): void {
    this.sections = SECTIONEXPERIENCES;
  }
}
