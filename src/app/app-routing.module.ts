import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {
    path : 'form',
    component :BlogCardComponent
  },
  {
    path : 'login',
    component :LoginFormComponent
  },
  {
    path : 'signup',
    component :SignupFormComponent
  },
  {
    path : '',
    component :SignupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
