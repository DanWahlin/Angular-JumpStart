import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IUserLogin } from '../../shared/interfaces';

@Injectable()
export class AuthService {

    // Can use /api/auth below when running locally
    // Full domain/port is included for Docker example
    authUrl = 'http://localhost:8080/api/auth';
    isAuthenticated = false;
    redirectUrl: string;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: HttpClient) { }

    private userAuthChanged(status: boolean) {
       this.authChanged.emit(status); // Raise changed event
    }

    login(userLogin: IUserLogin): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/login', userLogin)
            .pipe(
                map(loggedIn => {
                    this.isAuthenticated = loggedIn;
                    this.userAuthChanged(loggedIn);
                    return loggedIn;
                }),
                catchError(this.handleError)
            );
    }

    logout(): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/logout', null)
            .pipe(
                map(loggedOut => {
                    this.isAuthenticated = !loggedOut;
                    this.userAuthChanged(!loggedOut); // Return loggedIn status
                    return loggedOut;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Server error');
    }

}
