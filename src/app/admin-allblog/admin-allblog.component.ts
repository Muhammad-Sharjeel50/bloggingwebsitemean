import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-admin-allblog',
  templateUrl: './admin-allblog.component.html',
  styleUrls: ['./admin-allblog.component.css']
})
export class AdminAllblogComponent {
  userList :any ;
  pendingUserList:any;
  pendingBlogList:any;
  currentPage:number =1;
pageSize: number = 10;
  paginatedUserList: any[] = [];

  constructor (private http : HttpClient,  public router: Router,public toastr:ToastrService ,private apiService:ServicesService){
   this.userList = [];
  }
  ngOnInit(){
   this.getuserList();
   this.apiService.getAllUserForAdmin().subscribe((response:any)=>{
    //(response.data);
  this.userList = response ? response.data : [];
 })
 this.apiService.getPendingBlogForAdmin().subscribe((response:any)=>{
     
    this.pendingBlogList = response ? response.data : [];
   } )
   this.apiService.getPendingUserForAdmin().subscribe((response:any)=>{
     
    this.pendingUserList = response ? response.data : [];
   } )
  }
  get pagedUserList() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.userList && this.userList.slice(startIndex, endIndex);
  }
  getuserList():any{
   this.apiService.getAllUserForAdmin().subscribe((response:any)=>{
     //(response.data);
   this.userList = response ? response.data : [];
   
  })
  }
  adminApproval(id: any, status: any){
   //(id,status);
   return this.apiService.AdminApprovalForBlog(id,status,'').subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? this.toastr.success(response.message) :  this.toastr.error(response.message);
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
  
   return this.apiService.AdminApprovalFordeleteBlog(id).subscribe((response:any)=>{
     //(response.data);
     response.success ==true ? this.toastr.success(response.message) :  this.toastr.success(response.message);
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
   localStorage.clear();
    return this.router.navigate(['/']);
  }
}
