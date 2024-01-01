import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from '../constants';
import { LocalStorageService } from './local-Storage-Service';
import { catchError, map, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccceptedStationsService {
  private getAllStations = 'ChargingStations/GetAll';
  private getById = 'ChargingStations/GetbyId';
  private authToken = this.localStorageService.getToken();
  private deleteStations = 'ChargingStations/Remove';
  private getByUser = '/api/ChargingStations/GetbyUserId/{userId}';
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
    this.Http.get<any[]>(`${baseurl}/${this.getAllStations}`, {
      headers: this.headers,
    });

  geById = (StationId: string) =>
    this.Http.get<any>(`${baseurl}/${this.getById}/${StationId}`, {
      headers: this.headers,
    });

  removeStation = (requestId: string) => {
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
