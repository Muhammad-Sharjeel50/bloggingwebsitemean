import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentNameComponent } from './component-name/component-name.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
// import { BlogFormComponent } from './blog-form/blog-form.component';
// import { AdminPnnelComponent } from './admin-pnnel/admin-pnnel.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
// import { LoginAdminButtonComponent } from './login-admin-button/login-admin-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
// import { BlogFormComponent } from './blog-form/blog-form.component';
import { AuthorCRUDComponent } from './author-crud/author-crud.component';
import { AddblogFormComponent } from './addblog-form/addblog-form.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserApprovalComponent } from './admin-user-approval/admin-user-approval.component';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
@NgModule({
  declarations: [
    AppComponent,
    // ComponentNameComponent,
    SignupFormComponent,
    LoginFormComponent,
    BlogCardComponent,
    // BlogFormComponent,
    // AdminPnnelComponent,
    AdminPannelComponent,
    // LoginAdminButtonComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    // BlogFormComponent,
    AuthorCRUDComponent,
    AddblogFormComponent,
    UserPageComponent,
    HomePageComponent,
    AdminUserApprovalComponent,
    BlogDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
