import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-Storage-Service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private localStorage: LocalStorageService) {}
  ngOnInit(): void {
    // Subscribe to the currentUser observable to get user information
    console.log('form dashboard componet');
    this.localStorage.setLastVisitedRoute('/dashboard');
  }
}
