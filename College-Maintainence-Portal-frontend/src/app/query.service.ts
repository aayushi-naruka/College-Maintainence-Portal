import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QueryService {


  allQueryData = new BehaviorSubject<Array<object>>([])  
  allQuery = this.allQueryData.asObservable()

  departmentFilter = new BehaviorSubject<Array<string>>([])
  departmentFilterData = this.departmentFilter.asObservable()

  statusFilter = new BehaviorSubject<Array<string>>([])
  statusFilterData = this.statusFilter.asObservable()

  finalFilter = new BehaviorSubject<Array<object>>([])
  finalFilterData = this.finalFilter.asObservable()

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {  }

  getAllQueryData(){
    return this.http.get("http://localhost:1234/query/all")
  }

  getQueryById(){
    return this.http.get(`http://localhost:1234/query`, {      
      withCredentials: true
    })
  }

  submitQueryById(dataObj : object){


    return this.http.post("http://localhost:1234/query",dataObj)

  }

  submitAllQueryData(data : any){
     this.allQueryData.next(data)
  }

  getAllQuery(){
    return this.allQueryData.value
  }

  submitDepartmentFilters(data:string){
      let currentValue=this.departmentFilter.value
      let newValue=[...currentValue,data]
      this.departmentFilter.next(newValue)
  }

  removeDepartmentFilters(data:string){
    let currentValue=this.departmentFilter.value
    let index=currentValue.indexOf(data)
    currentValue.splice(index,1)
    this.departmentFilter.next(currentValue)
  }

  getDepartmentFilter(){
    return this.departmentFilter.value
  }


  submitStatusFilters(data:string){
    let currentValue=this.statusFilter.value
    let newValue=[...currentValue,data]
    this.statusFilter.next(newValue)
}

removeStatusFilters(data:string){
  let currentValue=this.statusFilter.value
  let index=currentValue.indexOf(data)
  currentValue.splice(index,1)
  this.statusFilter.next(currentValue)
}

getStatusFilter(){
  return this.statusFilter.value
}

submitFinalFilteredData(data : any){
  this.finalFilter.next(data)
}

getFinalFilteredData(){
 return this.finalFilter.value
}


}
