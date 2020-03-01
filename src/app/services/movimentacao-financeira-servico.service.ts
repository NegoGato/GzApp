import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MovimentacaoFinanceira } from '../models/movimentacaoFinanceira';
import { catchError } from 'rxjs/operators';
import { MovimentacaoFinanceiraQuery } from '../models/movimentacaoFinanceiraQuery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MovimentacaoFinanceiraServicoService {

  constructor(private http: HttpClient) { }

  // get all license data
  getAllById(url: string, contaId:number,data:string): Observable<MovimentacaoFinanceiraQuery[]> {
    const newUrl = `${url}?id=${contaId}&data=${data}`;
    return this.http.get<MovimentacaoFinanceiraQuery[]>(newUrl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAll(url:string): Observable<MovimentacaoFinanceira[]>{
    return this.http.get<MovimentacaoFinanceira[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  adicionar(url:string, movimentacao:MovimentacaoFinanceira):Observable<any>{
    const body = JSON.stringify(movimentacao);
    return this.http.post<MovimentacaoFinanceira>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  desativar(url:string, id:number, usuarioId:number):Observable<any>{
    const newUrl = `${url}?id=${id}&userId=${usuarioId}`;
    return this.http.get<MovimentacaoFinanceira[]>(newUrl, httpOptions)
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
