import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = 'http://localhost:8080/api/v1/user/registeruser';
  urls ='http://localhost:8080/api/v1/user/loginuser';
  adminApprovedUrl='http://localhost:8080/api/v1/admin/approveblog/:id';
  
  constructor(private http : HttpClient) { }
  user(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url,data)
  }
  userLogin(){
    return this.http.get(this.urls);
  }
  saveUserLogin(data:any){
    return this.http.post(this.urls,data)

  }
  
}
