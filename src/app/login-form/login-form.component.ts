import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
    users  :any;
    constructor (private userData : ServicesService,private router: Router){
        // this.userData.user().subscribe((data)=>{
        //   this.users = data;
        // })
       }
       LoginUser(data:any){
        console.warn(data);
        this.userData.saveUserLogin(data).subscribe((result:any)=>{
          console.log("result",result.success);
          if( result.success == true) {
            // console.log("In");
                  // this.showSuccess();
                  localStorage.setItem('token',result.token);
                  localStorage.setItem('role',result.role);
                  console.log(result);
                  console.log( localStorage.getItem('role'));
                  
                  alert(result.message);
                if(result.role =='User') { this.router.navigate(['/user'])}
                else if(result.role =='Admin') { this.router.navigate(['/admin'])}
                else if(result.role =='Author') { this.router.navigate(['/author'])}
              
          }
          else if( result.success == false){
            // this.showSuccess();
             alert(result.message);
             this.router.navigate(['/home'])
          }
          }) 
        }
        
}