import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[menuDirective]' })
export class MenuDirective {

  private fenetreOrdinateur: boolean = false;
  private menuOuvert: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.estFenetreOrdinateur();
    //this.afficher();
  }

  @HostListener('click', ['$event.target']) onClick() {
    this.menuOuvert = !this.menuOuvert;
    console.log("CLICK");
    this.afficher();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.estFenetreOrdinateur();
    this.afficher();
  }

  private estFenetreOrdinateur() {
    if (window.innerWidth >= 769) {
      this.fenetreOrdinateur = true;
    } else {
      this.fenetreOrdinateur = false;
    }
  }

  private afficher() {
    const menu = this.renderer.selectRootElement('.menu');
    const sousmenu = this.renderer.selectRootElement('.sous_menu');

    if(this.fenetreOrdinateur) {
      this.renderer.setStyle(menu, 'display', 'none');
      this.renderer.setStyle(sousmenu, 'display', 'flex');
    } else {
      this.renderer.setStyle(menu, 'display', 'block');
      if (this.menuOuvert) {
        this.renderer.setStyle(sousmenu, 'display', 'flex');
      } else {
        this.renderer.setStyle(sousmenu, 'display', 'none');
      }
    }
  }
}
