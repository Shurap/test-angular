import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RegitryDataInterface } from '../types/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: RegitryDataInterface = {
    username: '',
    email: '',
    password: ''
  };
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.authService.signUp(this.form).subscribe(
      (res) => {
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = 'We dont have any server. So you are registered.'
        this.isSuccessful = true;
      }
    )
  }

  redirect() {
    this.authService.logIn();
    this.router.navigate(['/home']);
  }

}