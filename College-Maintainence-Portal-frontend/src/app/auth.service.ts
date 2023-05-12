import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  userData = new BehaviorSubject<object>({}) 
   
  userDatahai = this.userData.asObservable()

  signup(data:any){
    return this.http.post("http://localhost:1234/auth/signup", data)
  }

  login(data:any){
    return this.http.post("http://localhost:1234/auth/login", data)
  }

  logout(){
    return this.http.get("http://localhost:1234/auth/logout", {      
      withCredentials: true
    })
  }

  getUserDetail(){
    return this.http.get("http://localhost:1234/auth/user", {      
      withCredentials: true
    })
  }

  addQuery(data:any){
    return this.http.post("http://localhost:1234/query/",data)
  }

  addUserData(dataObj:any){
    this.userData.next(dataObj)
  }

  getUserData(){
    return this.userData.value
  }

  emptyUserData(){
    this.userData.next([])
  }

}
