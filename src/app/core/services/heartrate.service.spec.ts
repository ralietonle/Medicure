import { TestBed } from '@angular/core/testing';

import { HeartrateService } from './heartrate.service';

describe('HeartrateService', () => {
  let service: HeartrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
