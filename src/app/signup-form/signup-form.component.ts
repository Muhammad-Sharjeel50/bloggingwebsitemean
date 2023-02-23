import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  title = 'A new User'
  users  :any;
 constructor (private userData : ServicesService){
  this.userData.user().subscribe((data)=>{
    this.users = data;
  })
 }
 LoginUser(data:any){
  console.log(data);
  this.userData.saveUser(data).subscribe((result)=>{
    console.log(result)})
}
}
