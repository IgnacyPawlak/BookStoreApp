import { BookFormComponent } from './book/book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/book', pathMatch:'full'},
  {
    path: 'book', component: BookComponent,
    children: [
      {path:'book-form', component: BookFormComponent}
    ]
  },
  { 
    path: 'user', component: UserComponent,
    children: [
      {path: 'registration', component: RegistrationComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
