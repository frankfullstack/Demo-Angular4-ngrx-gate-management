import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightitemComponent } from './flightitem.component';

describe('FlightitemComponent', () => {
  let component: FlightitemComponent;
  let fixture: ComponentFixture<FlightitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
