import { Routes } from '@angular/router';
import { RoutePaths } from '../../route-paths';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesRequestComponent } from './services-request/services-request.component';
import { AcceptedServicesComponent } from './accepted-services/accepted-services.component';

export const ServiceRoute: Routes = [
  {
    //:'pages/stations/request-details/',
    path: `${RoutePaths.serviceRequestDetails}/:requestId`,
    component: RequestDetailsComponent,
  },
  {
    path: `${RoutePaths.serviceDetails}/:serviceId`,
    component: ServiceDetailsComponent,
  },
  {
    path: `${RoutePaths.servicesRequest}`,
    component: ServicesRequestComponent,
  },

  {
    path: `${RoutePaths.acceptedServices}`,
    component: AcceptedServicesComponent,
  },
  {
    path: ``,
    component: ServicesRequestComponent,
  },
];
