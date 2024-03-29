import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Operacao } from '../models/operacao';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private _http:HttpClient) { }

  getAll(url:string):Observable<Operacao[]>{
    return this._http.get<Operacao[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllCredito(url:string):Observable<Operacao[]>{
    return this._http.get<Operacao[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }

  getAllDebito(url:string):Observable<Operacao[]>{
    return this._http.get<Operacao[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
