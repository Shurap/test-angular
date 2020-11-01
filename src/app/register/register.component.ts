import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;// ????
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
    // private dataservice: DataService
    ) { }

  @Output() onChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        this.errorMessage = 'We dont have any server. So you are registered.'
        this.isSignUpFailed = true;
        this.isSuccessful = true;
        // this.dataservice.isLogged = true;
      }
    )
  }

  go() {
    this.router.navigate(['/home']);
    this.onChanged.emit(true);
  }

}