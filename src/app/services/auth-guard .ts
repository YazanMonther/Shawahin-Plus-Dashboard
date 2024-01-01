// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggedCheck } from './loged-check';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private log: LoggedCheck, private router: Router) {}

  canActivate(): boolean {
    if (this.log.isUserLoggedIn()) {
      console.log('Is Allow');
      return true; // Allow access to the route if the user is logged in
    } else {
      this.router.navigate(['Login']); // Redirect to the login page if not logged in
      return false;
    }
  }
}
