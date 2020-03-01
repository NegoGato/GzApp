import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { License } from '../models/license';
import { Unidade } from '../models/unidade';
import { Pagamento } from '../models/pagamento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class UnidadeService {

  constructor(private http: HttpClient) { }

 getAllLicenseUnidadesById(url: string, id: string): Observable<License[]> {
  const newurl = `${url}?id=${id}`;
  return this.http.get<License[]>(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
 }

 getDetalheUnidade(url: string): Observable<any[]>{
     return this.http.get<any[]>(url);
 }

 getUnidade(url:string, id:number){
  const newurl = `${url}/${id}`;
  return this.http.get<Unidade[]>(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
 }
 getAllPagamentoUnidadesById(url: string, id: string): Observable<Pagamento[]> {
  const newurl = `${url}?identificadorFiscal=${id}`;
  return this.http.get<Pagamento[]>(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
 }

  // get all license data
  getAllUnidades(url: string): Observable<Unidade[]> {
    return this.http.get<Unidade[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new license details
  addUnidade(url: string, unidade: Unidade): Observable<any> {
    const body = JSON.stringify(unidade);
    return this.http.post<Unidade>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update license details
  updateUnidade(url: string, id: number, unidade: Unidade): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, unidade, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete contact information
  deleteUnidade(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42
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
