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
import { LoginAdminButtonComponent } from './login-admin-button/login-admin-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
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
    LoginAdminButtonComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
