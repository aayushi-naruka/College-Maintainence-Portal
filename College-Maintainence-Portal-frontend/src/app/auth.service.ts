import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  signup(data:any){
    return this.http.post("http://localhost:1234/auth/signup", data)
  }

  login(data:any){
    return this.http.post("http://localhost:1234/auth/login", data)
  }

  addQuery(data:any){
    return this.http.post("http://localhost:1234/query/",data)
  }
}
