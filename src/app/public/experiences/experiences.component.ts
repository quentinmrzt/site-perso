import { Component, OnInit } from '@angular/core';
import { Section, SECTIONEXPERIENCES } from 'src/app/shared/models/section';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  public sections: Section[];

  constructor() { }

  ngOnInit() {
    this.sections = SECTIONEXPERIENCES;
  }
}
