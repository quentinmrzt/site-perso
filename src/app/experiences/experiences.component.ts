import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'experiences',
	templateUrl: './app/experiences/experiences.component.html'
})
export class ExperiencesComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
