import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LoggedCheck } from './services/loged-check';
import { LocalStorageService } from './services/local-Storage-Service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    NgIf,
  ],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentRoute: string = '';

  constructor(
    private log: LoggedCheck,
    private router: Router,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const storedToken = this.localStorageService.getToken();
    this.currentRoute = this.localStorageService.getLastVisitedRoute();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute =
          this.route.snapshot.firstChild?.routeConfig?.path || '';
        this.localStorageService.setLastVisitedRoute(this.currentRoute);
      });
    if (storedToken && this.currentRoute.length > 1) {
      this.log.setUser(this.localStorageService.getUserData());
      console.log('if 1' + this.currentRoute);
      if (this.currentRoute === '' || this.currentRoute === 'Login') {
        console.log('if 2' + this.currentRoute);
        this.isLoggedIn = false;
        this.router.navigate(['Login']);
      } else {
        console.log('if 3' + this.currentRoute);
        this.isLoggedIn = true;
        this.router.navigate([`${this.currentRoute}`]);
      }
    } else {
      console.log('if 4' + this.currentRoute);
      this.isLoggedIn = false;
      this.router.navigate(['Login']);
    }
  }
  title = 'Shawahin-dashboard';
}
