import { Component , Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.css']
})
export class QueryContainerComponent implements OnInit {
@Input() queryData:any=""
title:string=""
department:string=""
date:string=""
user:string=""
queryid:string=""
type:string=""
room_no:string=""
img_url:string=""
ngOnInit(): void {
  
if(this.queryData!="")
    this.title=this.queryData.title;
    this.department=this.queryData.department
    this.date=this.queryData.created_date
    this.user=this.queryData.created_by
    this.queryid=this.queryData['_id']
    this.room_no=this.queryData.room_no
    if(this.department=="Electric"){ this.img_url="https://e7.pngegg.com/pngimages/598/682/png-clipart-incandescent-light-bulb-halogen-lamp-drawing-light-blue-light-fixture-lamp.png"}
    if(this.department=="Cleaning"){ this.img_url="https://static.vecteezy.com/system/resources/previews/011/564/365/non_2x/eps10-blue-abstract-broom-cleaning-dust-solid-icon-isolated-on-white-background-hygiene-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"}
    if(this.department=="Plumbing"){ this.img_url="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/plumbing-logos.jpg"}

}




}
