import { ProfileComponent } from './user/profile/profile.component';
import { BoardUserComponent } from './user/board-user/board-user.component';
import { BoardAdminComponent } from './user/board-admin/board-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { NoteComponent } from './note/note.component';
import { NoteFormComponent } from './note/note-form/note-form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {authInterceptorProviders} from './auth/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    NoteComponent,
    NoteFormComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
