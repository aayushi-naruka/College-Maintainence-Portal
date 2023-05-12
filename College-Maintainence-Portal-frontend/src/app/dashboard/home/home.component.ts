import { Component, OnInit } from '@angular/core';
import {QueryService} from '../../query.service'
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

showAddQuery:boolean=false
userQueryData: any=[]

  constructor(private queryservice : QueryService, private authservice : AuthService){}

  async ngOnInit(){
    this.showAddQuery=false
    
    // console.log("heheeh",this.userData)
    this.getQuery()
    
  }

  getQuery(){
    this.queryservice.getQueryById().subscribe((res)=>{
      this.userQueryData=res
    })
  }

  toggleAddQuery(){
   this.showAddQuery=!this.showAddQuery
   this.getQuery()
  }




}
