import { NoteComponent } from './note/note.component';
import { NoteFormComponent } from './note/note-form/note-form.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path: 'book', component: BookComponent,
    children: [
      {path:'book-form', component: BookFormComponent}
    ]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'note', component: NoteComponent,
    children: [
      {path: 'note-form', component: NoteFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
