import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
import { AuthorCRUDComponent } from './author-crud/author-crud.component';
import { AddblogFormComponent } from './addblog-form/addblog-form.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserApprovalComponent } from './admin-user-approval/admin-user-approval.component';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import { AdminSidenavbarComponent } from './admin-sidenavbar/admin-sidenavbar.component';
import { ToastComponent } from './toast/toast.component';
import { AdminMenubarComponent } from './admin-menubar/admin-menubar.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminAlluserComponent } from './admin-alluser/admin-alluser.component';
import { AdminAllblogComponent } from './admin-allblog/admin-allblog.component';
import { PendingBlogsComponent } from './pending-blogs/pending-blogs.component';
import { FooterComponent } from './footer/footer.component';
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
    BlogDescriptionComponent,
    AdminSidenavbarComponent,
    ToastComponent,
    AdminMenubarComponent,
    UpdateUserComponent,
    AdminAlluserComponent,
    AdminAllblogComponent,
    PendingBlogsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut:4000,
      progressBar:true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
