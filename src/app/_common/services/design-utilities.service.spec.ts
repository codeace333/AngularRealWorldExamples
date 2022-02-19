import { TestBed } from '@angular/core/testing';

import { DesignUtilitiesService } from './design-utilities.service';

describe('DesignUtilitiesService', () => {
  let service: DesignUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
