import { TestBed } from '@angular/core/testing';

import { RocketRestApiService } from './rocket-rest-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('RocketRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: RocketRestApiService = TestBed.get(RocketRestApiService);
    expect(service).toBeTruthy();
  });
});
