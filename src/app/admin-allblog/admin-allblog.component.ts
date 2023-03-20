import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-allblog',
  templateUrl: './admin-allblog.component.html',
  styleUrls: ['./admin-allblog.component.css']
})
export class AdminAllblogComponent {
  userList :any ;
  pendingUserList:any;
  pendingBlogList:any;
  constructor (private http : HttpClient,  public router: Router){
   this.userList = [];
  }
  ngOnInit(){
   this.getuserList();
   this.http.get('http://localhost:8080/api/v1/admin/getalluser').subscribe((response:any)=>{
    //(response.data);
  this.userList = response ? response.data : [];
 })
 this.http.get('http://localhost:8080/api/v1/admin/getpendingblog').subscribe((response:any)=>{
     
    this.pendingBlogList = response ? response.data : [];
   } )
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
     
    this.pendingUserList = response ? response.data : [];
   } )
  }
  getuserList():any{
   this.http.get('http://localhost:8080/api/v1/admin/getalluser').subscribe((response:any)=>{
     //(response.data);
   this.userList = response ? response.data : [];
   
  })
  }
  adminApproval(id: any, status: any){
   //(id,status);
   return this.http.put(  `http://localhost:8080/api/v1/admin/approveblog/${id} `,status ).subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? alert(response.message) :  alert(response.message);
     response.success ==true ? alert(response.message) :  alert(response.message);
     for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i]._id === id) {
        this.userList.splice(i, 1);
        break;
      }
    }
 
    // Close the modal
    const modal:any = document.getElementById("myModal");
    const modalBackdrop:any = document.getElementsByClassName("modal-backdrop")[0];
    modalBackdrop.parentNode.removeChild(modalBackdrop);
   this.ngOnInit()
   
   
  })
  };
  adminDeleteApproval(id: any){
  
   return this.http.delete(`http://localhost:8080/api/v1/admin/deleteblog/${id} `).subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? alert(response.message) :  alert(response.message);
     const modalBackdrop:any = document.getElementsByClassName("modal-backdrop")[0];
     // modalBackdrop.classList.remove("show");
     modalBackdrop.parentNode.removeChild(modalBackdrop);
    this.ngOnInit();
  })
  }; 
  viewBlog(blog:any){
   this.router.navigate([`/blog-details/${blog._id}`], { state: { blog: blog } });
   window.scroll(0,0);
  }
  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return this.router.navigate(['/']);
  }
}
