import { Book } from './../shared/book.model';
import { BookService } from './../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [
  ]
})
export class BookComponent implements OnInit {

  constructor(public service: BookService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Book){
    this.service.formData = Object.assign({},selectedRecord) ;
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this book?'))
    {
      this.service.deleteBook(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted successfully","Book delete")
        },
        err=>{console.log(err)}
      )
    }    
  }
}
