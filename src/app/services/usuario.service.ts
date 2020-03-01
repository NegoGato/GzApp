import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarioModel';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UsuarioPassword } from '../models/usuarioPassword';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

   // get all license data
   getAllUsuarios(url: string): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // get all license data
  getAllUsuario(url: string): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new license details
  addUsuario(url: string, usuario: UsuarioModel ,usuarioLogado:number): Observable<any> {
    const body = JSON.stringify(usuario);
    const newurl = `${url}?usuarioLogadoId=${usuarioLogado}`
    return this.http.post<UsuarioModel>(newurl, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

   // insert new license details
   updatePassword(url: string, usuario: UsuarioPassword): Observable<any> {
    const body = JSON.stringify(usuario);   
    return this.http.post(url, body, httpOptions);      
  }

  // update license details
  updateUsuario(url: string, id: number, usuario: UsuarioModel, usuarioLogado:number): Observable<any> {
    const newurl = `${url}?id=${id}&usuarioLogadoId=${usuarioLogado}`;
    return this.http.put(newurl, usuario, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete contact information
  deleteUsuario(url: string, id: number, usuarioLogado:number): Observable<any> {
    const newurl = `${url}?id=${id}&usuarioid=${usuarioLogado}`; // DELETE api/contact?id=42
    return this.http.delete(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

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
