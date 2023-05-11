import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {  }

  getAllQueryData(){
    return this.http.get("http://localhost:1234/query/all")
  }

  getQueryById(){
    return this.http.get(`http://localhost:1234/query/6446995253929ee0017182a4`)
  }

  submitQueryById(dataObj : object){
    return this.http.post("http://localhost:1234/query",dataObj)

  }

}
