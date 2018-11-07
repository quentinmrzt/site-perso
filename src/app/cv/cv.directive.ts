import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[couleurDirective]'
})
export class BorderCardDirective {

	private couleur08h15: string = "#F3C36E";
	private couleur12h31: string = "#DBC195";

	constructor(private el: ElementRef) {
		
	}
}
