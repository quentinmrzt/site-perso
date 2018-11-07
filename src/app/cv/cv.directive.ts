import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[couleurDirective]'
})
export class BorderCardDirective {

	private couleur12h31: string = "#DBC195";

	constructor(private el: ElementRef) {
	}
}
