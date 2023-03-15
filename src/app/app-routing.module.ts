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
import { AdminSidenavbarComponent } from './admin-sidenavbar/admin-sidenavbar.component';
import { AdminMenubarComponent } from './admin-menubar/admin-menubar.component';
import { AdminAlluserComponent } from './admin-alluser/admin-alluser.component';
import { AdminAllblogComponent } from './admin-allblog/admin-allblog.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PendingBlogsComponent } from './pending-blogs/pending-blogs.component';

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
    path : 'author',
    component :AuthorCRUDComponent
  },
  {
  path : 'admin',
  component :AdminMenubarComponent
},
{
  path : 'sidebar',
  component :AdminSidenavbarComponent
},
{
path : 'pendingblog',
component :PendingBlogsComponent
},
{
  path : 'allblog',
  component :AdminAlluserComponent
},
{
  path : 'alluser',
  component :AdminAllblogComponent
},
{
  path : 'updateuser',
  component :UpdateUserComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
