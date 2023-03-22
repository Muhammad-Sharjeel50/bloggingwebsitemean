import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  API_URL = 'http://localhost:8080/api/v1';
  constructor(private http : HttpClient) { }
  //For SignupForm
  registerUser(data:any){
    return this.http.post(this.API_URL + '/user/registeruser',data)
  }
  //for LoginForm
  loginUser(data:any){
    return this.http.post(this.API_URL + '/user/loginuser',data)
  }
  //For Admin User Approval Post
  AdminApprovalForUser(data:any){
    return this.http.put(this.API_URL + '/admin/approvaluser',data)
  }
  //For getting Pending Blogs of User for Admin Approval Post
  AdminApprovalForBlog(id:any,status:any,reason:any){
    return this.http.put(this.API_URL + '/admin/approveblog'+id,{status,reason})
  }
  AdminApprovalFordeleteBlog(id:any){
    return this.http.put(this.API_URL +   `/admin/deleteblog/${id}`,'')
  }
  //get pending Blog For Admin
  getPendingBlogForAdmin(){
    return this.http.get(this.API_URL + '/admin/getpendingblog')
  }
  getPendingUserForAdmin(){
    return this.http.get(this.API_URL + '/admin/getrequesteduser')
  }
  getAllUserForAdmin(){
    return this.http.get(this.API_URL + '/admin/getalluser')
  }
  getAllBlogForAdmin(){
    return this.http.get(this.API_URL + '/admin/getallblog')
  }
}
