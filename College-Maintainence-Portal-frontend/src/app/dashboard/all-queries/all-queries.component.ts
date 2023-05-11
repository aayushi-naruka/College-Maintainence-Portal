import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/query.service';
@Component({
  selector: 'app-all-queries',
  templateUrl: './all-queries.component.html',
  styleUrls: ['./all-queries.component.css']
})
export class AllQueriesComponent implements OnInit {

  allQueryData=[]

constructor(private queryservice : QueryService ){}

ngOnInit(): void {
  this.queryservice.getAllQueryData().subscribe((res:any)=>{
    this.allQueryData=res
  })
}

}
