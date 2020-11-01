import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { GetJson } from '../helpers/getjson';
import * as datas from '../../assets/data.json';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // constructor(private getJson: GetJson) { }

  register(data): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: data.username,
      email: data.email,
      password: data.password
    }, httpOptions);
  }

  getJson(): any {
    return datas['default']
  }
}