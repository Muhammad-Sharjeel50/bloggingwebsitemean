import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router){}
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
   getRolePage() {
    const role = localStorage.getItem('role');
  
    if (role === 'Admin') {
      return '/admin';
    } else if (role === 'Author') {
      return '/author';
    } else {
      return '/user';
    }
  }
  // navigationGuard(role:Location):Lo{
  //   if(localStorage.getItem('role')){
  //     return role = this.router.navigate(['/user']);

  //   }
  }


