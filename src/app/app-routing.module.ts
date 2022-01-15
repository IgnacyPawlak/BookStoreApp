import { PendingComponent } from './book/pending/pending.component';
import { BoardAdminComponent } from './user/board-admin/board-admin.component';
import { BoardUserComponent } from './user/board-user/board-user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NoteComponent } from './note/note.component';
import { NoteFormComponent } from './note/note-form/note-form.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'admin', component: BoardAdminComponent},
  {
    path: 'book', component: BookComponent,
    children: [
      {path:'book-form', component: BookFormComponent}
     
    ]
  },
  {path: 'pending', component: PendingComponent},
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
