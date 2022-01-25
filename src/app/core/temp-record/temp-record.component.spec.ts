import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRecordComponent } from './temp-record.component';

describe('TempRecordComponent', () => {
  let component: TempRecordComponent;
  let fixture: ComponentFixture<TempRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
