import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteService } from 'src/app/shared/note.service';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/book.service';
import { UserService } from 'src/app/shared/user.service'; 


@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styles: [
        
    ]
})

export class NoteComponent implements OnInit {

  constructor(public service: NoteService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Note){
    this.service.formData = Object.assign({},selectedRecord) ;
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this note?'))
    {
      this.service.deleteNote(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted successfully","Note delete")
        },
        err=>{console.log(err)}
      )
    }    
  }
}
