import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  @Output() noteEmitter = new EventEmitter();
  note:Object = {note: ''};

  constructor() { }

  ngOnInit() {
  }

  newNote(){
  	console.log('emitting from new component')
  	this.noteEmitter.emit(this.note);
    this.note = {note:''};
  }

}
