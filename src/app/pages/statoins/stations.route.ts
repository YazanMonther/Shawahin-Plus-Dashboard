import { Routes } from '@angular/router';
import { RoutePaths } from '../../route-paths';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { AcceptedStationsComponent } from './accepted-stations/accepted-stations.component';
import { StationDetailsComponent } from './station-details/station-details.component';

export const StaitonRoute: Routes = [
  {
    //:'pages/stations/request-details/',
    path: `${RoutePaths.requestDetails}/:requestId`,
    component: RequestDetailsComponent,
  },
  {
    path: `${RoutePaths.stationDetails}/:stationId`,
    component: StationDetailsComponent,
  },
  {
    path: `${RoutePaths.stationsRequest}`,
    component: RequestTableComponent,
  },

  {
    path: `${RoutePaths.acceptedStations}`,
    component: AcceptedStationsComponent,
  },
  {
    path: ``,
    component: RequestTableComponent,
  },

  // {
  //   path: '**',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full', // Add pathMatch
  // },
];
