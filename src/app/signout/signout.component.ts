import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  redirect() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}