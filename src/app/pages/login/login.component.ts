import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Auth-Service';
import { AuthModel } from '../../models/auth.model';
import { Router } from '@angular/router';
import { LoggedCheck } from '../../services/loged-check';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private log: LoggedCheck,
    private router: Router
  ) {}
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  onSubmit(): void {
    const authModel = new AuthModel(); // Create an instance of AuthModel
    authModel.email = this.username;
    authModel.password = this.password;

    this.authService.login(authModel).subscribe(
      () => {
        console.log('Authentication successful');
        this.router.navigate(['/dashboard']);
        window.location.reload();
      },
      (error) => {
        console.error('Authentication failed:', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
