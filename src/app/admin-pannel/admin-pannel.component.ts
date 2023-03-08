
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';
// import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})

export class AdminPannelComponent implements OnInit  {
  userList :any ;
 constructor (private http : HttpClient,private admin : ServicesService){
  this.userList = [];
 }
 

 ngOnInit(){
  this.getuserList();
  
 }
 getuserList():any{
  this.http.get('http://localhost:8080/api/v1/admin/getpendingblog').subscribe((response:any)=>{
    console.log(response.data);
  this.userList = response ? response.data : [];
  
 })
 }
 adminApproval(id: any, status: any){
  console.log(id,status);
  return this.http.put(  `http://localhost:8080/api/v1/admin/approveblog/${id} `,status ).subscribe((response:any)=>{
    console.log(response.data);
    response.success ==true ? alert(response.message) :  alert(response.message);
   
  
  
 })
 };
 adminDeleteApproval(id: any){
  console.log(id);
  return this.http.delete(`http://localhost:8080/api/v1/admin/deleteblog/${id} `).subscribe((response:any)=>{
    console.log(response.data);
    response.success ==true ? alert(response.message) :  alert(response.message);
   
  
  
 })
 }; 
}
