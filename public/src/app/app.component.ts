import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  notes:object[] = [];

  constructor(private _http:HttpService){
  	this.getNotes();
  }

  newNote(eventData){
  	console.log('in note from child in app component');
  	console.log(eventData)
  	// this.note = eventData;
  	this._http.newNote(eventData)
  	.then((res)=>{
  		console.log('in new note in app component');
  		console.log('successfully added note');
  		this.getNotes();
  	})
  	.catch((err)=>{
  		console.log('in new note in app component');
  		console.log(err);
  	});
  }

  getNotes(){
  	this._http.allNotes()
  	.then((res)=>{
  		console.log('in get notes in app component');
  		this.notes = res;
  		console.log(this.notes);
  	})
  	.catch((err)=>{
  		console.log('in get notes in app component');
  		console.log(err);
  	});
  }
}
