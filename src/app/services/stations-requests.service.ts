import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from '../constants';
import { LocalStorageService } from './local-Storage-Service';
import { catchError, map, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StationsRequestService {
  private getAllRequests = 'ChargingStationRequest/GetAllRequest';
  private getById = 'ChargingStationRequest/GetRequestById';
  private acceptRequestUrl = 'ChargingStations';
  private authToken = this.localStorageService.getToken();
  private deleteRequest = 'ChargingStationRequest/Delete';
  private denayRequestUrl = 'ChargingStationRequest/Denay';
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
    this.Http.get<any[]>(
      `${baseurl}/${
        this.getAllRequests
      }?userId=${this.getUserIdFromLocalStorage()}`,
      { headers: this.headers }
    );
  getReqById = (requestId: string) =>
    this.Http.get<any>(`${baseurl}/${this.getById}/${requestId}`, {
      headers: this.headers,
    });

  acceptRequest = (requestId: string) => {
    if (!this.authToken) {
      return throwError('Authentication token is missing');
    }

    const options = { headers: this.headers };

    return this.Http.post<any>(
      `${baseurl}/${
        this.acceptRequestUrl
      }/${requestId}/${this.getUserIdFromLocalStorage()}`,
      null,
      options
    ).pipe(
      catchError((error) => {
        console.error('Error:', error);
        const errorMessage = error.error ? error.error : 'Something went wronG';
        return throwError(errorMessage);
      })
    );
  };

  removeRequest = (requestId: string) => {
    if (!this.authToken) {
      return throwError('Authentication token is missing');
    }

    const options = { headers: this.headers };

    return this.Http.delete<any>(
      `${baseurl}/${this.deleteRequest}/${requestId}`,
      options
    ).pipe(
      catchError((error) => {
        console.error('Error:', error);
        const errorMessage = error.error ? error.error : 'Something went wrong';
        return throwError(errorMessage);
      })
    );
  };

  denayRequest = (requestId: string) => {
    if (!this.authToken) {
      return throwError('Authentication token is missing');
    }

    const options = { headers: this.headers };

    return this.Http.put<any>(
      `${baseurl}/${this.denayRequestUrl}/${requestId}`,
      null,
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
