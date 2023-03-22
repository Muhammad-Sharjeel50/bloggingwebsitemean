import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pending-blogs',
  templateUrl: './pending-blogs.component.html',
  styleUrls: ['./pending-blogs.component.css']
})
export class PendingBlogsComponent implements OnInit { 
  pendingBlogList:any;
  pendingUserList:any;
  constructor(private router : Router,private http:HttpClient,private toastr :ToastrService) {}
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/v1/admin/getpendingblog').subscribe((response:any)=>{
     
    this.pendingBlogList = response ? response.data : [];
   } )
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
     
    this.pendingUserList = response ? response.data : [];
   } )  
  }
  Logout(){
    this.toastr.info("Logout Successfully")
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return this.router.navigate(['/']);
  }
}
