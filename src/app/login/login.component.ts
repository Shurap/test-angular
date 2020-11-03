import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export interface LoginDataInterface {
  username: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: LoginDataInterface = {
    username: '',
    password: ''
  };
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.authService.signIn(this.form).subscribe(
      (res) => {
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = 'We dont have any server. So you are logged.'
        this.isSuccessful = true;
      }
    )
  }

  redirect() {
    this.authService.logIn();
    this.router.navigate(['/home']);
  }

}