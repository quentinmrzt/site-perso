import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'competences',
	templateUrl: './app/competences/competences.component.html',
	styleUrls: ['./app/competences/competences.component.css']
})
export class CompetencesComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
