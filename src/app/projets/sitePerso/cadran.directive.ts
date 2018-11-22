import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[projetCadran]'
})
export class CadranDirective implements OnChanges {

	@Input("projetCadran") texte:string;

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}


	ngOnChanges(): void {
		console.log("test: "+this.texte);
		if(this.texte == "jour") {
			this.setAngle("07h55");
		} else if (this.texte == "nuit") {
			this.setAngle("16h48");
		}
	}

  private setAngle(heure: string) {
    let angleJour = this.getAngle(heure);
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
