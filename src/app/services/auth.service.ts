import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Emulate login http request
const AUTH_API = 'http://randomhost.com/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loggedSource = new Subject<boolean>();

  signUp(data): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: data.username,
      email: data.email,
      password: data.password
    }, httpOptions);
  }
  
  signIn(data): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: data.username,
      password: data.password
    }, httpOptions);
  }

  logIn() {
    return this.loggedSource.next(true);
  }

  logOut() {
    return this.loggedSource.next(false);
  }
}