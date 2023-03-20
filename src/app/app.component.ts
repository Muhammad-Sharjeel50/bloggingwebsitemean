import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   blogForm = new FormGroup({
//    title : new FormControl('',[Validators.required,Validators.email]),
//    description : new FormControl(''),
//   })
//   title = 'bloggingapplication';


// formSubmit(){
//   //(this.blogForm.value)
// }

// get(){
//   return this.blogForm.get('title')
// }

onSubmit(data:any)
{
  //(data);
}
}
