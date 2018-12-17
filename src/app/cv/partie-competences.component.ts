import { Component, OnInit } from '@angular/core';
import { SectionData } from '../data/sectionData';
import { SECTIONCOMPETENCES } from '../data/mock-sectionCompetences';

@Component({
	selector: 'partie-competences',
	templateUrl: './app/cv/partie-competences.component.html',
  styleUrls: ['./app/cv/partie-competences.component.css', './app/cv/partie.component.css']
})
export class PartieCompetencesComponent implements OnInit {
	private competences: SectionData[];

	ngOnInit(): void {
    this.competences = SECTIONCOMPETENCES;
  }
}
