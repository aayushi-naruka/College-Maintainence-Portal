import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

cancelHandler(){

  this.displayAddQuery.emit(true)

}

}
