import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenavbar',
  templateUrl: './admin-sidenavbar.component.html',
  styleUrls: ['./admin-sidenavbar.component.css']
})
export class AdminSidenavbarComponent {
  constructor (private router :Router){}
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
}
