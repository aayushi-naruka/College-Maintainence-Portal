import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit{

@Output() displayAddQuery = new EventEmitter<boolean>();

ngOnInit(): void {

}

cancelHandler(){

  this.displayAddQuery.emit(true)

}

}
