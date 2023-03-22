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
  
 constructor (private apiService : ServicesService,private toastr : ToastrService,private router: Router){}
 LoginUser(data:any){
  console.warn(data);
  this.apiService.registerUser(data).subscribe((result:any)=>{
    if( result.success == true) {
      this.toastr.success(result.message);
   localStorage.setItem('token',result.token)
   localStorage.setItem('role',result.role);
      this.router.navigate(['/user'])
    }
    else if( result.success == false){
       this.toastr.error(result.message);
} }) 
  }
}
