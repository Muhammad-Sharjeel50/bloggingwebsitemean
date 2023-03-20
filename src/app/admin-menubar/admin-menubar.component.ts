import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-menubar',
  templateUrl: './admin-menubar.component.html',
  styleUrls: ['./admin-menubar.component.css']
})
export class AdminMenubarComponent implements OnInit{
  userList :any ;
  blogList:any;
  pendingBlogList:any;
  pendingUserList:any;
  constructor (private router:Router,private http : HttpClient){
  this.userList = [];
  this.blogList = [];
  }
  ngOnInit(): void {
    //for all user
    this.http.get('http://localhost:8080/api/v1/admin/getalluser').subscribe((response:any)=>{
     
    this.userList = response ? response.data : [];
   } )
  //  for all blog
   this.http.get('http://localhost:8080/api/v1/admin/getallblog').subscribe((response:any)=>{
     
    this.blogList = response ? response.data : [];
   } )
   this.http.get('http://localhost:8080/api/v1/admin/getpendingblog').subscribe((response:any)=>{
     
    this.pendingBlogList = response ? response.data : [];
   } )
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
     
    this.pendingUserList = response ? response.data : [];
   } )
  }
  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return this.router.navigate(['/']);
  }
}
