import { Component, OnInit } from '@angular/core';

import { Partie, SECTIONPARTIES } from 'src/app/shared/models/partie';
import { Section, SECTIONCOMPETENCES } from 'src/app/shared/models/section';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public parties: Partie[];
	public competences: Section[];

  constructor() { }

  ngOnInit() {
		this.parties = SECTIONPARTIES;
		this.competences = SECTIONCOMPETENCES;
  }

}
