import { Component, OnInit } from '@angular/core';

import { Photo, DONNEEPHOTOS } from 'src/app/shared/models/photo';

@Component({
  selector: 'app-photos-de-couverture',
  templateUrl: './photos-de-couverture.component.html',
  styleUrls: ['./photos-de-couverture.component.scss']
})
export class PhotosDeCouvertureComponent implements OnInit {

  public photos:Photo[] = DONNEEPHOTOS;

  public heureJour:string = "07h16";
  public heureNuit:string = "20h04";

  constructor() { }

  ngOnInit() {
  }

}
