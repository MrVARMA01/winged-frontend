import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { User } from '../Components/user-account/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/auth/";
  jwtToken = this.loginService.isLoggedIn();

  constructor(private http: HttpClient, private loginService: LoginService) { }



  userByUsername(email: any): Observable<any> {
    return this.http.get(`${this.url}user/${email}`);
  }

  updateUser(user:User):any{
    return this.http.put(`${this.url}update-user/${user.userId}`,user);
  }

}
