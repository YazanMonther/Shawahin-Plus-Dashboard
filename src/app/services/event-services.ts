import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseurl } from '../constants';
import { LocalStorageService } from './local-Storage-Service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private addEvent = 'CommunityEvents/Add';
  private authToken = this.localStorageService.getToken();

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `bearer ${this.authToken}`,
  });
  constructor(
    private http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  postEvent(eventData: any): Observable<any> {
    const options = { headers: this.headers };
    return this.http.post<any>(
      `${baseurl}
    ${this.addEvent}`,
      eventData,
      options
    );
  }
}
