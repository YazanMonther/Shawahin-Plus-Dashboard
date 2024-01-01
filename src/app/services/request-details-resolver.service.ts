// request-details-resolver.service.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { StationsRequestService } from './stations-requests.service';

@Injectable({
  providedIn: 'root',
})
export class RequestDetailsResolver implements Resolve<any> {
  constructor(private requestService: StationsRequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    const requestId = route.params['requestId'];
    return this.requestService.getReqById(requestId).toPromise();
  }
}
