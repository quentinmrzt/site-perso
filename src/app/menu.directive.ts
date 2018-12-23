import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[menuDirective]' // avec +s pour test
})
export class MenuDirective {

  constructor(private el: ElementRef) {
    this.afficher(true);
  }

  private afficher(aAfficher: boolean) {
    if (aAfficher) {
      this.el.nativeElement.style.display = " block";
    } else {
      this.el.nativeElement.style.display = "none";
    }
  }
}
