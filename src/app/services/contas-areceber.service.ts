import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContasAReceber } from '../models/contasAreceber';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContasApagarSearch } from '../models/contasApagarSearch';
import { ListId } from '../models/listId';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ContasAreceberService {
  constructor(private _http:HttpClient) { }

  add(url:string, contasAreceber:ContasAReceber,userId:number):Observable<any>{
      const newUrl = `${url}?userId=${userId}`;
      const body = JSON.stringify(contasAreceber);
      return this._http.post(newUrl,body,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(url:string , id:number, contasAreceber:ContasAReceber,userId:number):Observable<any>{
    const newUrl = `${url}?id=${id}&userId=${userId}`;
    return  this._http.put(newUrl, contasAreceber,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(url:string, id:number, idUser:number):Observable<any>{
    const newUrl = `${url}?id=${id}&idUser=${idUser}`;
    return this._http.delete(newUrl, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAll(url:string):Observable<ContasAReceber[]>{
    return this._http.get<ContasAReceber[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  getAdvanced(url:string, contasAreceberSearch:ContasApagarSearch):Observable<ContasAReceber[]>{
    const body = JSON.stringify(contasAreceberSearch);
    return this._http.post<ContasAReceber[]>(url, body,httpOptions)
    .pipe(
       catchError(this.handleError)
    );
  }

  getCancelarPagamento(url:string, listId:number[],userId:number):Observable<any>{
    var lst = new ListId();
    lst.listId = listId
    const newUrl = `${url}?userId=${userId}`;
    var body = JSON.stringify(lst);
    return this._http.post(newUrl,body,httpOptions)
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
