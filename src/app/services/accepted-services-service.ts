import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from '../constants';
import { LocalStorageService } from './local-Storage-Service';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccceptedServicesService {
  private getAllServices = 'Services/GetAll';
  private getById = 'Services/GetById';
  private authToken = this.localStorageService.getToken();
  private deleteStations = 'Services/Remove';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `bearer ${this.authToken}`,
  });
  constructor(
    private readonly Http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  getUserIdFromLocalStorage(): string {
    console.log(this.localStorageService.getUserId());
    console.log(`token : ${this.authToken}`);
    return this.localStorageService.getUserId() || '';
  }
  getAll = () =>
    this.Http.get<any[]>(`${baseurl}/${this.getAllServices}`, {
      headers: this.headers,
    });

  geById = (StationId: string) =>
    this.Http.get<any>(`${baseurl}/${this.getById}/${StationId}`, {
      headers: this.headers,
    });

  removeService = (requestId: string) => {
    if (!this.authToken) {
      return throwError('Authentication token is missing');
    }

    const options = { headers: this.headers };

    return this.Http.delete<any>(
      `${baseurl}/${this.deleteStations}/${requestId}`,
      options
    ).pipe(
      catchError((error) => {
        console.error('Error:', error);
        const errorMessage = error.error ? error.error : 'Something went wrong';
        return throwError(errorMessage);
      })
    );
  };
}
