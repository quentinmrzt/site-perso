import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'projets',
	templateUrl: './app/projets/projets.component.html'
})
export class ProjetsComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
