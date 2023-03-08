import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-approval',
  templateUrl: './admin-user-approval.component.html',
  styleUrls: ['./admin-user-approval.component.css']
})
export class AdminUserApprovalComponent implements OnInit{
  userList :any ;
  constructor (private http : HttpClient){
   this.userList = [];
  }
  
 
  ngOnInit(){
   this.getuserList();
   
  }
  getuserList():any{
    
    
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
     console.log(response.data);
   this.userList = response ? response.data : [];
   
  })
  }
  adminApproval(id: any, role: any){
    const token = localStorage.getItem('token');
    console.log(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
   console.log(id,role);
   return this.http.put(  `http://localhost:8080/api/v1/admin/approveuser/${id} `,role,{headers} ).subscribe((response:any)=>{
     console.log(response.data);
     response.success ==true ? alert(response.message) :  alert(response.message);
    
   
   
  })
  };
  
  }

