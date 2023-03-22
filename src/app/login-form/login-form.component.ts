import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit{
    users  :any;
    constructor (private apiService : ServicesService,private router: Router, private toster: ToastrService){ }
       ngOnInit(){
        // this.toster.('Message Success!', 'Title Success!');
       }
       LoginUser(data:any){
       
        this.apiService.loginUser(data).subscribe((result:any)=>{
        
          if( result.success == true) {
                  localStorage.setItem('token',result.token);
                  localStorage.setItem('role',result.role);  
                   this.toster.success(result.message);
                if(result.role =='User') { this.router.navigate(['/user'])}
                else if(result.role =='Admin') { this.router.navigate(['/admin'])}
                else if(result.role =='Author') { this.router.navigate(['/author'])}
              
          }
          else if( result.success == false){
            this.toster.warning(result.message);
          }
          }) 
        }
        
}