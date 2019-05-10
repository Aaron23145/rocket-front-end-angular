import { TestBed } from '@angular/core/testing';

import { RocketRestApiService } from './rocket-rest-api.service';

describe('RocketRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RocketRestApiService = TestBed.get(RocketRestApiService);
    expect(service).toBeTruthy();
  });
});
