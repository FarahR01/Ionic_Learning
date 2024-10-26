import { TestBed } from '@angular/core/testing';

import { RateFetcherService } from './rate-fetcher.service';

describe('RateFetcherService', () => {
  let service: RateFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
