import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      (res) => {
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = 'We dont have any server. So you are registered.'
        this.isSuccessful = true;
        this.dataservice.getJson()
      }
    )
  }

  go() {
    this.dataservice.changeLogged(true);
    this.router.navigate(['/home']);
  }

}