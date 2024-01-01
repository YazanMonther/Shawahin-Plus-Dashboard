import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/Auth-Service';
import { LocalStorageService } from '../../services/local-Storage-Service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private logout: AuthService,
    private LocalStorage: LocalStorageService
  ) {}
  LogOut() {
    this.logout.logout();
    this.LocalStorage.setLastVisitedRoute('');
    window.location.reload();
  }
}
