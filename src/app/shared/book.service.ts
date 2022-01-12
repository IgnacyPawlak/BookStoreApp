import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  formData: Book = new Book();
  readonly baseURL = `https://localhost:44340/api/Book`;

  list: Book[];

  postBook(){
   return this.http.post(this.baseURL,this.formData);
  }

  putBook(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  deleteBook(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Book[]);
  }
}