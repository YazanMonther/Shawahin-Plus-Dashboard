import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly USER_Data_KEY = 'currentUser';

  getUserData(): any {
    const userDataString = localStorage.getItem(`${this.USER_Data_KEY}`);
    const userData = JSON.parse(userDataString || '{}');
    return userData.userProfile;
  }
  getUserId(): string {
    const userDataString = localStorage.getItem(`${this.USER_Data_KEY}`);
    const userData = JSON.parse(userDataString || '{}');
    return userData.userProfile?.userId || '';
  }
  getToken(): string {
    const userDataString = localStorage.getItem(`${this.USER_Data_KEY}`);
    const userData = JSON.parse(userDataString || '{}');
    return userData.accessToken || '';
  }
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  getLastVisitedRoute(): string {
    return localStorage.getItem('lastVisitedRoute') || '';
  }

  setLastVisitedRoute(route: string): void {
    localStorage.setItem('lastVisitedRoute', route);
  }
}
