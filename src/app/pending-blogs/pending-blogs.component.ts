import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-blogs',
  templateUrl: './pending-blogs.component.html',
  styleUrls: ['./pending-blogs.component.css']
})
export class PendingBlogsComponent {
  constructor(private router : Router) {
  
  }
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
}
