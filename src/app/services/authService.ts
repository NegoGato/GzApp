import { Router } from '@angular/router';
import { Global } from './../shared/Global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${Global.BASE_USER_ENDPOINT}login`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    Global.SetCurrentUser(JSON.parse(localStorage.getItem('currentUser')));                   
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
