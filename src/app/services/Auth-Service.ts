import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthModel } from '../models/auth.model';
import { UserModel } from '../models/user.models';
import { baseurl } from '../constants';
import { LoggedCheck } from './loged-check';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private authSubject = new BehaviorSubject<UserModel | null>(null);
  private loginUrl = `${baseurl}/Auth/login`; // Replace with your actual login endpoint
  constructor(private http: HttpClient) {}
  loggedCh = inject(LoggedCheck);

  login(credentials: AuthModel): Observable<any> {
    return this.http.post<UserModel>(this.loginUrl, credentials).pipe(
      tap((response) => {
        const user: UserModel = {
          accessToken: response.accessToken,
          userProfile: response.userProfile,
        };
        console.log(user.accessToken);
        document.cookie = `jwt=${user.accessToken}; Secure; SameSite=Strict`;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedCh.setUser(user);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed:', error);

        // Customize error handling based on the error status or message
        if (
          error.status === 400 &&
          error.error.message ===
            "Value cannot be null. (Parameter 'Invalid Email Address')"
        ) {
          // Handle specific validation error
          // For example, you might want to notify the user about the invalid email address
        } else {
          // Handle other errors as needed
        }

        return throwError('Login failed');
      })
    );
  }

  logout(): void {
    // this.authSubject.next(null);
    // Clear the user details from localStorage
    localStorage.removeItem('currentUser');
  }
}
