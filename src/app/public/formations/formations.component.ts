import { Component, OnInit } from '@angular/core';
import { Section, SECTIONFORMATIONS } from 'src/app/shared/models/section';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  public sections: Section[];

  constructor() { }

  ngOnInit() {
    this.sections = SECTIONFORMATIONS;
  }

}
