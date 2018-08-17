import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLibComponent } from './our-lib.component';

describe('OurLibComponent', () => {
  let component: OurLibComponent;
  let fixture: ComponentFixture<OurLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
