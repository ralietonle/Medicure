import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRecordComponent } from './heart-record.component';

describe('HeartRecordComponent', () => {
  let component: HeartRecordComponent;
  let fixture: ComponentFixture<HeartRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
