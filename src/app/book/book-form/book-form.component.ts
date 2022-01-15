import { ToastrService } from 'ngx-toastr';
import { BookService } from './../../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {

  constructor(public service:BookService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.bookId==0) this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postBook().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Added successfully',"Add Book Register")
      },
      err => { console.log(err)}
    );
  }

  updateRecord(form: NgForm){
    this.service.putBook().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully',"Add Book Register")
      },
      err => { console.log(err)}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Book();
  }
}
