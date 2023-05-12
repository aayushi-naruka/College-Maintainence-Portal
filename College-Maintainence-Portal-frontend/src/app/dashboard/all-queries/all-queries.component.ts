import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/query.service';
@Component({
  selector: 'app-all-queries',
  templateUrl: './all-queries.component.html',
  styleUrls: ['./all-queries.component.css']
})
export class AllQueriesComponent implements OnInit {

  allQueryData : any
  filterDepartment:any
  filterStatus:any
  DepartmentFilteredData:any
  statusDilteredData:any
constructor(private queryservice : QueryService ){}

ngOnInit(): void {
  this.allQueryDataMethod()
}

allQueryDataMethod(){
  this.queryservice.getAllQueryData().subscribe((res:any)=>{
    this.allQueryData=res
    this.queryservice.submitAllQueryData(res)
  })
}

updateAllQueryData($event:any){
  this.allQueryDataMethod()
}

checkboxHandler(event : any){
console.log(event)
if(event.target.checked){
  this.queryservice.submitDepartmentFilters(event.target.value)
}
else{
  this.queryservice.removeDepartmentFilters(event.target.value)
}
this.filterStatus=this.queryservice.getStatusFilter()
this.filterDepartment=this.queryservice.getDepartmentFilter()
if(this.filterDepartment.length>0){
  this.allQueryData=this.allQueryData.filter((item :any)=>{  
    for(let filter of this.filterDepartment){
      if(item.department===filter){
        return item
      }
    }
})
this.DepartmentFilteredData=this.allQueryData
}
else{
  this.allQueryData=this.statusDilteredData
}
if(this.filterStatus.length==0 && this.filterDepartment.length==0){
  this.allQueryData=this.queryservice.getAllQuery()
}

}


statuscheckboxHandler(event :any){


  if(event.target.checked){
    this.queryservice.submitStatusFilters(event.target.value)
  }
  else{
    this.queryservice.removeStatusFilters(event.target.value)
  }
  this.filterDepartment=this.queryservice.getDepartmentFilter()
  this.filterStatus=this.queryservice.getStatusFilter()
  if(this.filterStatus.length>0){
    this.allQueryData=this.allQueryData.filter((item :any)=>{  
      for(let filter of this.filterStatus){
        if(item.status===filter){
          return item
        }
      }
  })
  this.statusDilteredData=this.allQueryData
  }
  else{
    this.allQueryData=this.DepartmentFilteredData
  }
  
  if(this.filterStatus.length==0 && this.filterDepartment.length==0){
    this.allQueryData=this.queryservice.getAllQuery()
  }

}


}
