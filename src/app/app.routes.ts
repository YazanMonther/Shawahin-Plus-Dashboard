import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestDetailsComponent } from './pages/statoins/request-details/request-details.component';
import { NgModule } from '@angular/core';
import { RoutePaths } from './route-paths';
import { StatoinsComponent } from './pages/statoins/statoins.component';
import { LoginComponent } from './pages/login/login.component';
import { UserResolver } from './Resolvers/user-Resolver';
import { AuthGuard } from './services/auth-guard ';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    //resolve: { user: UserResolver },
    // canActivate: [AuthGuard], // Apply the AuthGuard to this route
  },
  {
    path: `${RoutePaths.stations}`,
    component: StatoinsComponent,
    loadChildren: () =>
      import('./pages/statoins/stations.route').then((m) => m.StaitonRoute),
    //   canActivate: [AuthGuard], // Apply the AuthGuard to this route
  },
  {
    path: `${RoutePaths.services}`,
    component: ServicesComponent,
    loadChildren: () =>
      import('./pages/services/services.route').then((m) => m.ServiceRoute),
    //   canActivate: [AuthGuard], // Apply the AuthGuard to this route
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  //   path: '**',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full', // Add pathMatch
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
