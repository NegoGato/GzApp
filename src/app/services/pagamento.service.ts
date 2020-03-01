import { Injectable } from '@angular/core';
import { Pagamento } from '../models/pagamento';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class PagamentoService {

  constructor(private http: HttpClient) { }

  // get all Pagamento data
  getAllPagamento(url: string): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new pagamento details
  addPagamento(url: string, pagamento: Pagamento): Observable<any> {
    const body = JSON.stringify(pagamento);
    return this.http.post<Pagamento>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update pagamento details
  updatePagamento(url: string, id: number, pagamento: Pagamento): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, pagamento, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete contact information
  deletePagamento(url: string, id: number, usuarioId: number): Observable<any> {
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
