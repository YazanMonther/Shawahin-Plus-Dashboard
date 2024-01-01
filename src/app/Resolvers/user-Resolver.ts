// user-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.models';
import { LocalStorageService } from '../services/local-Storage-Service';
import { LoggedCheck } from '../services/loged-check';

@Injectable({
  providedIn: 'root',
})
export class UserResolver
  implements Resolve<Observable<UserModel | null | undefined>>
{
  constructor(
    private log: LoggedCheck,
    private localStorageService: LocalStorageService
  ) {}

  resolve(): Observable<UserModel | null | undefined> {
    return this.log.currentUserObservable;
  }
}
