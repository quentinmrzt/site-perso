import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDeCouvertureComponent } from './photos-de-couverture.component';

describe('PhotosDeCouvertureComponent', () => {
  let component: PhotosDeCouvertureComponent;
  let fixture: ComponentFixture<PhotosDeCouvertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosDeCouvertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDeCouvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
