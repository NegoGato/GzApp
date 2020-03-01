import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ContaFinanceira } from '../models/contaFinanceira';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  // get all Conta Financeira data
  getAllConta(url: string): Observable<ContaFinanceira[]> {
    return this.http.get<ContaFinanceira[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new conta details
  addContaFinanceira(url: string, conta: ContaFinanceira): Observable<any> {
    const body = JSON.stringify(conta);
    return this.http.post<ContaFinanceira>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update conta details
  updateConta(url: string, id: number, conta: ContaFinanceira): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, conta, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete conta information
  deleteConta(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; 
    return this.http.delete(newurl, httpOptions)
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
