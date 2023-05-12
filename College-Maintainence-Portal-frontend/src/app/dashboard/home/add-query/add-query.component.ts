import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Router} from'@angular/router'
import { AuthService } from '../../../auth.service';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit{

@Output() displayAddQuery = new EventEmitter<boolean>();

ngOnInit(): void {

//   {       "department": "Cleaning",
//         "title":"tables are not cleaned",
//         "room_no":"CF-05",
//         "created_by":"6446995253929ee0017182a4"
// }

}

queryForm: FormGroup;
constructor(  private router : Router , private authservice: AuthService, private cookieservice : CookieService , private _snackBar: MatSnackBar) {
  this.queryForm = new FormGroup({
    room: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),

  });

}

cancelHandler(){
  this.displayAddQuery.emit(true)
}

addQuery(value:any){
   let obj ={
    department : value.department,
    room_no : value.room,
    title : value.query,
    cookie : this.cookieservice.get('session')
   }

   this.authservice.addQuery(obj).subscribe((res:any)=>{
    if(res.status){
  
        this.displayAddQuery.emit(true)
        this._snackBar.open("Query successfully inserted",'', {
          duration: 3000
        });
     
    
    }
     console.log("added successfully");
   });
}

}
