import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class RocketRestApiService {
  baseApiUrl: string = 'http://localhost:8080';
  errorMsg: string = 'Network Error. Make sure that you have the rest api server active and that you have configured correctly the configuration file with its url. If it\'s everything configured correctly, please, try again.';

  getStatus(): Observable<Response> {
    return this.http.get<Response>(`${this.baseApiUrl}/status`)
      .pipe(catchError(this.handleError('status')));
  }
  getCountdown(): Observable<Response> {
    return this.http.get<Response>(`${this.baseApiUrl}/countdown`)
      .pipe(catchError(this.handleError('countdown')));
  }
  postStart() {}
  postReset() {}

  private handleError(operation: string) {
    return (error: any): Observable<null> => {
      console.error(`Error trying to connect with the rest api. Operation failed: ${operation}`);
      return of(null);
    }
  }

  constructor(private http: HttpClient) {}
}
