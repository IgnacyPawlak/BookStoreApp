import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    UserComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
<<<<<<< Updated upstream
  providers: [UserService],
=======
  providers: [authInterceptorProviders],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
