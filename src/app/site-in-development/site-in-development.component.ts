import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
    selector: 'app-note',
    templateUrl: './site-in-development.component.html',
    styles: [
        
    ]
})

export class SiteInDevelopmentComponent implements OnInit {
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