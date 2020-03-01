import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConciliacaoQuery } from '../models/conciliacaoQuery';
import { catchError } from 'rxjs/operators';
import { ConciliacaoBancaria } from '../models/conciliacaoBancaria';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConciliacaoBancariaService {

  constructor(private _http:HttpClient) { }
   
  listPagamentoParaConciliacaoOuJaConciliado(url:string, contaId:number, data:string): Observable<ConciliacaoQuery[]>{
    const newUrl = `${url}/${contaId}/${data}`; 
    return this._http.get<ConciliacaoQuery[]>(newUrl, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  listPagamentoParaConciliacaoOuJaConciliadoDoMes(url:string):Observable<ConciliacaoQuery[]>{
    return this._http.get<ConciliacaoQuery[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  baixarPagamento(url:string, listPagamento:ConciliacaoBancaria[], userId:number):Observable<any>{
       const newUrl = `${url}?userId=${userId}`; 
       const body = JSON.stringify(listPagamento);
       return this._http.post<ConciliacaoBancaria>(newUrl, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  desfazerConciliacao(url:string, listPagamento:ConciliacaoBancaria[], userId:number):Observable<any>{
    const newUrl = `${url}?userId=${userId}`; 
    const body = JSON.stringify(listPagamento);
    return this._http.put(newUrl, body,httpOptions)
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
