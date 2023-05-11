import { Component, OnInit } from '@angular/core';
import {QueryService} from '../../query.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

showAddQuery:boolean=false
userQueryData: any=[]
  constructor(private queryservice : QueryService){}

  async ngOnInit(){
    this.showAddQuery=false
    this.queryservice.getQueryById().subscribe((res)=>{
      this.userQueryData=res
    })
    console.log(this.userQueryData)
  }

  toggleAddQuery(){
   this.showAddQuery=!this.showAddQuery
  }




}
