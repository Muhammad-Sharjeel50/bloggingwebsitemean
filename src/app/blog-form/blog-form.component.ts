import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})

export class AppComponent {
  blogForm = new FormGroup({
   title : new FormControl('',[Validators.required,Validators.email]),
   description : new FormControl(''),
  })
  title = 'bloggingapplication';


formSubmit(){
  console.log(this.blogForm.value)
}

get(){
  return this.blogForm.get('title')
}
}

