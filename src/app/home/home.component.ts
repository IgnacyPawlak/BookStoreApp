import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
    selector: 'app-note',
    templateUrl: './home.component.html',
    styles: [
        
    ]
})

export class HomeComponent implements OnInit {
    content?: string;
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getPublicContent().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
  }