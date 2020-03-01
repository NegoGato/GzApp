import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { License } from '../models/license';
import { Usuario } from '../models/usuario';
import { Details } from '../models/details';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class LicenseService {

  constructor(private http: HttpClient) { }

  // get all license data
  getAllLicenses(url: string): Observable<License[]> {
    return this.http.get<License[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(url:string,id:number):Observable<License>{
    const newUrl = `${url}?id=${id}`;
    return this.http.get<License>(newUrl);
  }

  // insert new license details
  addLicense(url: string, license: License): Observable<any> {
    const body = JSON.stringify(license);
    return this.http.post<License>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDetails(url:string, unidadeId:number,id:number):Observable<Details>{
      const newurl = `${url}?unidadeId=${unidadeId}&id=${id}`;
        return this.http.get<Details>(newurl, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
  }

  // update license details
  updateLicense(url: string, id: number, license: License): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, license, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete contact information
  deleteLicense(url: string, id: number, usuarioId: number): Observable<any> {
    const newurl = `${url}?id=${id}&usuarioid=${usuarioId}`; // DELETE api/contact?id=42
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
