import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

  newNote(note){
  	return this._http.post('/api/notes', note)
  	.map(res=>res.json())
  	.toPromise();
  }

  allNotes(){
  	return this._http.get('/api/notes')
  	.map(res=>res.json())
  	.toPromise();
  }
}
