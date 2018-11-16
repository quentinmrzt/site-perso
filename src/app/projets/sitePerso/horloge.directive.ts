import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[projetHorloge]'
})
export class HorlogeDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.getHeure();
	}

  private getHeure() {
    let date = new Date;
    let secondes = date.getSeconds();
    let minutes = date.getMinutes();
    let heures = date.getHours();
		
    let angleHeures = (heures*30) + (minutes / 2);
    let angleMinutes = minutes*6;
    let angleSeconde = secondes*6;

    /*var elements: HTMLCollection[] = this.el.nativeElement.children;
		console.log(elements.item(0));
		console.log(elements);*/

    /*var elementSecondes = document.querySelector('.secondes');
    elementSecondes.style.msTransform = 'rotateZ('+ angleSeconde +'deg)';
    elementSecondes.style.webkitTransform = 'rotateZ('+ angleSeconde +'deg)';
    elementSecondes.style.transform = 'rotateZ('+ angleSeconde +'deg)';

    var elementMinutes = document.querySelector('.minutes');
    elementMinutes.style.msTransform = 'rotateZ('+ angleMinutes +'deg)';
    elementMinutes.style.webkitTransform = 'rotateZ('+ angleMinutes +'deg)';
    elementMinutes.style.transform = 'rotateZ('+ angleMinutes +'deg)';

    var elementHeures = document.querySelector('.heures');
    elementHeures.style.msTransform = 'rotateZ('+ angleHeures +'deg)';
    elementHeures.style.webkitTransform = 'rotateZ('+ angleHeures +'deg)';
    elementHeures.style.transform = 'rotateZ('+ angleHeures +'deg)';*/
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
