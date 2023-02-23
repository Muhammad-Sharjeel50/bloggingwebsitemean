import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {
    path : 'home',
    component :BlogCardComponent
  },
  {
    path : '',
    component :LoginFormComponent
  },
  {
    path : 'about',
    component :AboutComponent
  },
  {
    path : 'signup',
    component :SignupFormComponent
  },
  {
    path : 'contactus',
    component :ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
