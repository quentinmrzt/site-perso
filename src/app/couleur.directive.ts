import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[couleurBorderJaumonts]' // avec +s pour test
})
export class CouleurBorderDirective {

	private couleur18h00:string = "#c37805";
	private couleur08h15: string = "#F3C36E";
	private couleur12h31: string = "#DBC195";
	private couleurTest: string = "red";

	constructor(private el: ElementRef) {
		this.setBorder(this.couleur12h31);
	}

	private setBorder(color: string) {
		let border = 'solid 4px ';

		if (this.el.nativeElement.id == "photocouverture") {
			this.el.nativeElement.style.borderBottom = border + color;
		} else {
			this.el.nativeElement.style.border = border + color;
		}
	}
}
