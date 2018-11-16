import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[projetCadran]'
})
export class CadranDirective {

  private heureJour:string = "10h30";

	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.setAngle();
	}

  private setAngle() {
    let angleJour = this.getAngle(this.heureJour);
    this.el.nativeElement.style.transform =  "rotate(" + angleJour + "deg)";
  }

  private getAngle(heure: string) {
		let minutes = this.heureToMinute(heure);
		let CONSTANTE = 360/(24*60);

		return minutes*CONSTANTE;
	}

  // a refacto
	public heureToMinute(heure:string) {
		let tmp = heure.split("h");
		return parseInt(tmp[0])*60 + parseInt(tmp[1]);
	}
}
