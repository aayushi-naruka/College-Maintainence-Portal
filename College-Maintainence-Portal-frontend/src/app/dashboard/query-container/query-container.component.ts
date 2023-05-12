import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { QueryService } from 'src/app/query.service';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.css']
})
export class QueryContainerComponent implements OnInit {
@Input() queryData:any=""
@Output() updateAllQueryData = new EventEmitter<boolean>();
title:string=""
department:string=""
date:string=""
user:string=""
queryid:string=""
type:string=""
room_no:string=""
img_url:string=""
status:string=""
userData:any
showdropdownstatus=false
constructor(private authservice : AuthService,private queryservice : QueryService){}

ngOnInit(): void {
  
if(this.queryData!=""){
    this.title=this.queryData.title;
    this.department=this.queryData.department
    this.date=this.queryData.created_date
    this.user=this.queryData.created_by
    this.queryid=this.queryData['_id']
    this.room_no=this.queryData.room_no
    this.status=this.queryData.status
    if(this.department=="Electric"){ this.img_url="https://static.vecteezy.com/system/resources/previews/005/162/878/original/light-bulb-energy-and-idea-symbol-on-white-background-free-vector.jpg"}
    if(this.department=="Cleaning"){ this.img_url="https://static.vecteezy.com/system/resources/previews/011/564/365/non_2x/eps10-blue-abstract-broom-cleaning-dust-solid-icon-isolated-on-white-background-hygiene-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"}
    if(this.department=="Plumbing"){ this.img_url="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/plumbing-logos.jpg"}

}

this.userData= this.authservice.getUserData()

if(this.userData.role==="maintainence"){
this.showdropdownstatus=true
}


}


statusChangeHandler(event : any){

console.log(event)

let dataObj={
  queryId : this.queryid,
  querystatus : event.target.value
}

this.queryservice.updateQueryStatus(dataObj).subscribe((response :any)=>{

this.updateAllQueryData.emit(true)

})

}


}
