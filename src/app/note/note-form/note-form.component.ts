import { BookService } from './../../shared/book.service';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from './../../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styles: [
  ]
})
export class NoteFormComponent implements OnInit {

  constructor(public service:NoteService,public bookService:BookService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitNote(form:NgForm){
    if(this.service.formData.noteId==0) this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postNote().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Added successfully',"Add Note Register")
      },
      err => { console.log(err)}
    );
  }

  updateRecord(form: NgForm){
    this.service.putNote().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully',"Add Note Register")
      },
      err => { console.log(err)}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Note();
  }
}
