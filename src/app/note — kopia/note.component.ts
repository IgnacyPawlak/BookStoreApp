import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Note } from 'app/shared/note.model';
import { NoteService } from 'app/shared/note.service';
import { Book } from 'app/shared/book.model';
import { BookService } from 'app/shared/book.service';
import { UserService } from 'app/shared/user.service'; 


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
