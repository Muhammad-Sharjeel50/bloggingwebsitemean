import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
// import { BlogFormComponent } from './blog-form/blog-form.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { AuthorCRUDComponent } from './author-crud/author-crud.component';
import { AddblogFormComponent } from './addblog-form/addblog-form.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserApprovalComponent } from './admin-user-approval/admin-user-approval.component';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';

const routes: Routes = [
  {
    path : 'user',
    component :UserPageComponent
  },
  
  { path: 'card', component: BlogCardComponent },
  { path: 'blog-details/:id', component: BlogDescriptionComponent },
  {
    path : 'login',
    component :LoginFormComponent
  },
  {
    path : '',
    component :HomePageComponent
  },
  {
    path : 'about',
    component :AboutComponent
  },
  {
    path : 'approval',
    component :AdminUserApprovalComponent
  },
  {
    path : 'signup',
    component :SignupFormComponent
  },
  {
    path : 'contactus',
    component :ContactComponent
  },
  {
    path : 'form',
    component :AddblogFormComponent
  },
  {
    path : 'admin',
    component :AdminPannelComponent
  },
  {
    path : 'author',
    component :AuthorCRUDComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
