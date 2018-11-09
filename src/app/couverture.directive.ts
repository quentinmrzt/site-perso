import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[couverture]'
})
export class CouvertureDirective {

  private nomsPhoto:string[] = ["07h45", "08h15", "12h31", "16h06", "16h32", "16h56", "17h12", "17h25", "17h30", "17h38", "18h00"];
  private format:string = ".png";

	constructor(private el: ElementRef) {
		this.setPhotoCouverture();
	}

	private setPhotoCouverture() {
    let now = new Date();
    var nom = this.lePlusPres(now.getHours()+"h"+now.getMinutes());
    //var nom = this.lePlusPres("12h00");

		let image = "images/couverture/cathedrale/" + nom + this.format;
		this.el.nativeElement.src = image;
	}

  private lePlusPres(heure: string) {
    var minuteActuelle:number = this.heureToMinute(heure);
    var minutesPhoto:number[] = [];

    for (var nomPhoto of this.nomsPhoto) {
      minutesPhoto.push(this.heureToMinute(nomPhoto));
    }

    var index:number = -1;
    var difference:number = 24*60;
    for (var i=0 ; i<minutesPhoto.length ; i++) {
      var differenceTmp:number = Math.abs(minutesPhoto[i] - minuteActuelle);
      if(differenceTmp<difference) {
        difference = differenceTmp;
        index = i;
      }
    }

    return this.nomsPhoto[index];
  }

  private heureToMinute(heure:string) {
    let tmp = heure.split("h");
    return parseInt(tmp[0])*60 + parseInt(tmp[1]);
  }
}
