import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePersoComponent } from './site-perso.component';

describe('SitePersoComponent', () => {
  let component: SitePersoComponent;
  let fixture: ComponentFixture<SitePersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
