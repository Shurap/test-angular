import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isLogged = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedSource.subscribe(data => {
      this.isLogged = data
    })
  }
}