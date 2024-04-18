import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/"
  constructor(private http:HttpClient) { }


  register(credentials:any):Observable<any>{
    return this.http.post(`${this.url}register`,credentials);
  }
  
  Login(credentials:any){
    return this.http.post(`${this.url}login`,credentials);
  }

  isLoggedIn(){
    return localStorage.getItem('token');
  }
  getUserData(){
    const data = localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  Logout(){
    return localStorage.removeItem('token');
  }

  forgotPassword(credentials:any){
    return this.http.put(`${this.url}forget-password`,credentials);
  }
}
