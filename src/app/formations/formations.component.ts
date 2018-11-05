import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'formations',
	templateUrl: './app/formations/formations.component.html'
})
export class FormationsComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {

	}
}
