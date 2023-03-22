import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-alluser',
  templateUrl: './admin-alluser.component.html',
  styleUrls: ['./admin-alluser.component.css']
})
export class AdminAlluserComponent {
  userList :any ;
  pendingBlogList:any;
  pendingUserList:any;
  editList:any;
  currentPage:number =1;
  pageSize: number = 10;
    paginatedUserList: any[] = [];
  constructor (private http : HttpClient,  public router: Router,public toastr:ToastrService){
   this.userList = [];
  }
  
 
  ngOnInit(){
   this.getuserList();
   this.http.get('http://localhost:8080/api/v1/admin/getpendingblog').subscribe((response:any)=>{
     
    this.pendingBlogList = response ? response.data : [];
   } )
   this.http.get('http://localhost:8080/api/v1/admin/getrequesteduser').subscribe((response:any)=>{
     
    this.pendingUserList = response ? response.data : [];
   } )
   
  }
  get pagedUserList() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.userList && this.userList.slice(startIndex, endIndex);
  }
  getuserList():any{
   this.http.get('http://localhost:8080/api/v1/admin/getallblog').subscribe((response:any)=>{
     //(response.data);
   this.userList = response ? response.data : [];
  })
  
  }
  adminApproval(id: any, status: any){
   //(id,status);
   return this.http.put(  `http://localhost:8080/api/v1/admin/approveblog/${id} `,status ).subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? this.toastr.success(response.message) :  this.toastr.success(response.message);
    //  response.success ==true ? this.toastr.success(response.message) :  this.toastr.success(response.message);
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
   //(id);
   return this.http.delete(`http://localhost:8080/api/v1/admin/deleteblog/${id} `).subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? this.toastr.success(response.message) :  this.toastr.success(response.message);
     const modalBackdrop:any = document.getElementsByClassName("modal-backdrop")[0];
     // modalBackdrop.classList.remove("show");
     modalBackdrop.parentNode.removeChild(modalBackdrop);
    this.ngOnInit()
  })
  }; 
  viewBlog(blog:any){
   this.router.navigate([`/blog-details/${blog._id}`], { state: { blog: blog } });
   window.scroll(0,0);
  }
  Logout(){
    localStorage.clear();
    this.toastr.info('Logout Successfully')
    return this.router.navigate(['/']);
  }
  editblog(datas:any):any {
    //(data);
   this.editList = datas
  }
 }

