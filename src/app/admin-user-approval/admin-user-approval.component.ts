import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  userList :any ;
  constructor (private http : HttpClient,public router : Router){
  //  this.userList = [];
  //  this.userList: Admin[] = [];
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
     for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i]._id === id) {
        this.userList.splice(i, 1);
        break;
      }
    }

    // Close the modal
    const modal:any = document.getElementById("myModal");
    // modal.classList.remove("show");
    // modal.style.display = "none";
    const modalBackdrop:any = document.getElementsByClassName("modal-backdrop")[0];
    // modalBackdrop.classList.remove("show");
    modalBackdrop.parentNode.removeChild(modalBackdrop);
   this.ngOnInit()
  })
  };
  Logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
  }

