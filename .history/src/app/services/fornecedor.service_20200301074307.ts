import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor';
import { catchError } from 'rxjs/operators';
import { Global } from '../shared/Global';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + Global.GetCurrentUser().token
  })
};
@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

 
  getAll(url: string) {
    const newUrl = `${url}convencios`;
    return this.http.get<Fornecedor[]>(newUrl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getById(url:string,id:number):Observable<Fornecedor[]>{
    const newurl = `${url}/${id}`;
    return this.http.get<Fornecedor[]>(newurl,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  add(url: string, fornecedor:Fornecedor):Observable<any>{
    const body = JSON.stringify(fornecedor);
    return this.http.post<Fornecedor>(url,body,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  update(url:string, id:number, fornecedor:Fornecedor):Observable<any>{
    const newUrl = `${url}?id=${id}`;
    return this.http.put(newUrl,fornecedor,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  delete(url:string, id:number):Observable<any>{
     const newUrl =`${url}?id=${id}`;
     return this.http.delete(newUrl, httpOptions)
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
