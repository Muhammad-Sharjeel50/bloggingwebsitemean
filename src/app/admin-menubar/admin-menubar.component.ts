import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menubar',
  templateUrl: './admin-menubar.component.html',
  styleUrls: ['./admin-menubar.component.css']
})
export class AdminMenubarComponent {
  constructor (private router:Router){}
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
}
