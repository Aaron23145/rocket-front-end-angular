import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from './response';
import { backendUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class RocketRestApiService {
  baseApiUrl: string = backendUrl;
  errorMsg: string = 'Network Error. Make sure that you have the rest api server active and that you have configured correctly the configuration file with its url. If it\'s everything configured correctly, please, try again.';

  getStatus(): Observable<Response> {
    return this.http.get<Response>(`${this.baseApiUrl}/status`)
      .pipe(catchError(this.handleError('status')));
  }
  getCountdown(): Observable<Response> {
    return this.http.get<Response>(`${this.baseApiUrl}/countdown`)
      .pipe(catchError(this.handleError('countdown')));
  }
  postStart(): Observable<Response> {
    return this.http.post<Response>(`${this.baseApiUrl}/start`, null)
      .pipe(catchError(this.handleError('start')));
  }
  postReset(): Observable<Response> {
    return this.http.post<Response>(`${this.baseApiUrl}/reset`, null)
      .pipe(catchError(this.handleError('reset')))
  }

  private handleError(operation: string) {
    return (error: any): Observable<null> => {
      if(error.status !== 409) {
        console.error(`Error trying to connect with the rest api. Operation failed: ${operation}`);
        return of(null);
      } else {
        return of(error.error);
      }
    }
  }

  constructor(private http: HttpClient) {}
}
