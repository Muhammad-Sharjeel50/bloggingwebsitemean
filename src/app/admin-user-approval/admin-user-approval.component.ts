import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
interface Admin {
  _id: string;
  Email: string;
  role: string;
}
@Component({
  selector: 'app-admin-user-approval',
  templateUrl: './admin-user-approval.component.html',
  styleUrls: ['./admin-user-approval.component.css']
})
export class AdminUserApprovalComponent implements OnInit{
  @ViewChild('closebutton') closebutton:any;
  userList :any ;
  selectedUserId: any;
  constructor (private http : HttpClient,public router : Router){}
  ngOnInit(){
   this.getuserList();
  }
  getuserList():any{ 
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
   this.userList = response ? response.data : [];
  })
  }
  adminApproval( role: any){
   let id:any = this.selectedUserId._id;
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `${token}`);
   return this.http.put(  `http://localhost:8080/api/v1/admin/approveuser/${id} `,role,{headers} ).subscribe((response:any)=>{
     response.success == true ? alert(response.message) :  alert(response.message);
    const modalBackdrop:any = document.getElementsByClassName("modal-backdrop")[0];
    modalBackdrop.classList.remove("show");
    modalBackdrop.parentNode.removeChild(modalBackdrop);
   this.ngOnInit()
 
  })
  };
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
  userApprovalConfirmation(admin:any){
   this.selectedUserId= admin;
  }
  }

