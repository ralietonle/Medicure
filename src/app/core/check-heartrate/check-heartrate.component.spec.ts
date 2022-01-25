import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHeartrateComponent } from './check-heartrate.component';

describe('CheckHeartrateComponent', () => {
  let component: CheckHeartrateComponent;
  let fixture: ComponentFixture<CheckHeartrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckHeartrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHeartrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
