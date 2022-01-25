import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieDetectorComponent } from './lie-detector.component';

describe('LieDetectorComponent', () => {
  let component: LieDetectorComponent;
  let fixture: ComponentFixture<LieDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
