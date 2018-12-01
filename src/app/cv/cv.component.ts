import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'cv',
	templateUrl: './app/cv/cv.component.html',
	styleUrls: ['./app/cv/cv.component.css']
})
export class CVComponent {
	constructor(private router: Router) { }
}
