import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedCheck {
  private currentUserSubject: BehaviorSubject<UserModel | null | undefined> =
    new BehaviorSubject<UserModel | null | undefined>(undefined);

  // Expose an observable to components
  currentUserObservable: Observable<UserModel | null | undefined> =
    this.currentUserSubject.asObservable();

  constructor() {}

  // Example method to update the user in the subject
  setUser(user: UserModel | null | undefined): void {
    this.currentUserSubject.next(user);
  }

  // Check if the user is logged in
  isUserLoggedIn(): boolean {
    const currentUser = this.currentUserSubject.value;
    return currentUser !== null && currentUser !== undefined;
  }
}
