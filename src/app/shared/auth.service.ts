import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44340/api/Access/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'Login', {
      email,
      password
    }, httpOptions);
  }

  register(name: string, surname:string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'Registration', {
      name,
      surname,
      email,
      password
    }, httpOptions);
  }
}