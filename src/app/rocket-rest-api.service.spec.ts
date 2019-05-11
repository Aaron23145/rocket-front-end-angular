import { RocketRestApiService } from './rocket-rest-api.service';
import { of } from 'rxjs';
import { Response } from './response';
import { HttpErrorResponse } from '@angular/common/http';

describe('RocketRestApiService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: RocketRestApiService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new RocketRestApiService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the response when successfull request', () => {
    const expectedResponse: Response = {
      timestamp: 'Any time',
      status: 200,
      error: 'OK',
      message: 'Any message',
      path: '/any',
    };

    httpClientSpy.get.and.returnValue(of(expectedResponse));

    service.getStatus().subscribe(response => {
      expect(response.timestamp).toEqual(expectedResponse.timestamp);
      expect(response.status).toEqual(expectedResponse.status);
      expect(response.error).toEqual(expectedResponse.error);
      expect(response.message).toEqual(expectedResponse.message);
      expect(response.path).toEqual(expectedResponse.path);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return a normal response even if it is an error 409', () => {
    const expectedErrorResponse = new HttpErrorResponse({
      error: {
        timestamp: 'Any time',
        status: 409,
        error: 'OK',
        message: 'Any error',
        path: '/error',
      },
      status: 409,
      statusText: 'Conflict'
    });

    httpClientSpy.get.and.returnValue(of(expectedErrorResponse));

    service.getStatus().subscribe((response: any) => {
      expect(response.error.timestamp).toEqual(expectedErrorResponse.error.timestamp);
      expect(response.error.status).toEqual(expectedErrorResponse.error.status);
      expect(response.error.error).toEqual(expectedErrorResponse.error.error);
      expect(response.error.message).toEqual(expectedErrorResponse.error.message);
      expect(response.error.path).toEqual(expectedErrorResponse.error.path);
    });
  });

  it('should return an error if it\'s not a 409 error', () => {
    const expectedErrorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(of(expectedErrorResponse));

    service.getCountdown().subscribe((error: any) => {
      expect(error.error).toEqual(expectedErrorResponse.error);
      expect(error.status).toEqual(expectedErrorResponse.status);
      expect(error.statusText).toEqual(expectedErrorResponse.statusText)
    });
  });
});
