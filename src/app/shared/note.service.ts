import { Note } from './note.model';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  formData: Note = new Note();
  readonly baseURL = `https://localhost:44340/api/Note`;

  list: Note[];

  postNote(){
   return this.http.post(this.baseURL,this.formData);
  }

  putNote(){
    return this.http.put(`${this.baseURL}/${this.formData.noteId}`,this.formData);
  }

  deleteNote(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Note[]);
  }
}