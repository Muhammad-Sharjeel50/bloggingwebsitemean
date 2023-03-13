import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  user= {
     name: '',
     email: '',
     username: '',
     password: '',
     confirmPassword: ''
  }
  users: any;
  
 constructor (private userData : ServicesService,private toastr : ToastrService,private router: Router){}
 LoginUser(data:any){
  console.warn(data);
  this.userData.saveUser(data).subscribe((result:any)=>{
    console.log("result",result);
    if( result.success == true) {
      alert(result.message);
      this.router.navigate(['/user'])
    }
    else if( result.success == false){
       alert(result.message);
} }) 
  }

}
