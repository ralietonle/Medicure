import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPatientsComponent } from './check-patients.component';

describe('CheckPatientsComponent', () => {
  let component: CheckPatientsComponent;
  let fixture: ComponentFixture<CheckPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
