import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  formData: Book = new Book();
  readonly baseURL = `https://localhost:44340/api/Book`;

  list: Book[];
  
  postBook(){
   return this.http.post(this.baseURL,this.formData,httpOptions);
  }

  putBook(){
    return this.http.put(`${this.baseURL}/${this.formData.bookId}`,this.formData);
  }

  deleteBook(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL).forEach(b => {this.list = b as Book[];console.log('test');
    });
  }
}