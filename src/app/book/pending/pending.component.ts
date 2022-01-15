import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/shared/book.service";

@Component({
    selector: 'app-note',
    templateUrl: './pending.component.html',
    styles: [
        
    ]
})

export class PendingComponent implements OnInit {
    content?: string;
  
    constructor(private service: BookService) { }
  
    
  ngOnInit(): void {
    this.service.refreshList();
  }

  }