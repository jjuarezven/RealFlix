import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getShows(): Observable<Array<Show>> {
    return this.http
      .get<Array<Show>>(`${this.baseUrl}shows`)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
