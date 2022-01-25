import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTemperatureComponent } from './check-temperature.component';

describe('CheckTemperatureComponent', () => {
  let component: CheckTemperatureComponent;
  let fixture: ComponentFixture<CheckTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
