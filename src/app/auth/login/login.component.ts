import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { TokenStorageService } from '../../shared/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    
    this.http.post("", {email, password}).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.isLoginFailed = false;      
    }, err => {
      this.isLoginFailed=true;
    })

    // this.authService.login(email, password).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.token);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage(): void {
    window.location.reload();
  }
}