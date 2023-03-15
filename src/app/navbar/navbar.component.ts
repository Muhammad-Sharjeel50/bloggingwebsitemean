import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  // user = { name: '', email: '', password: '' };
  image: any;
  modalRef:any;
  userList :any;
  editList : any = [];
  title:any;
  description:any;
  // image:any;
  user:any;
   
 
  // id:any = "64003b2d775065fc26cd9932";
  dataId:any = localStorage.getItem('token');
  id:any ;
  imageSrc: any;
  constructor(private router: Router,private http: HttpClient, public modalService: NgbModal){
  this.userList = [];
  //  this.editList = [];
   
  }
  ngOnInit(){
    
    
   this.getuserList();
   console.log("dataId",this.userList);
   const token = localStorage.getItem('token');
   console.log(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
console.log(headers);
let data  = this.http.get('http://localhost:8080/api/v1/user/getuser',{headers}).subscribe((response:any)=> {
     
// this.toastService.toasts.push(response.message);
console.log(response);
this.user = response.result;
} 
)
  }
  getuserList():any{

  }
  
  onFileSelected(event: any) {
    this.image = event.target.files[0];
    if (this.image) {
      const reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }

  Logout(){
    localStorage.removeItem('token');
    // this.ngOnInit();
    return this.router.navigate(['/']);
    
  }
   getRolePage() {
    const role = localStorage.getItem('role');
  
    if (role === 'Admin') {
      return '/admin';
    }
    else if (role === 'User') {
      return '/user';
    } 
    else if (role === 'Author') {
      return '/author';
    }
    
    else {
      return '';
    }
  }
  
  // navigationGuard(role:Location):Lo{
  //   if(localStorage.getItem('role')){
  //     return role = this.router.navigate(['/user']);

  //   }

  onSubmit(id:any,data:any):any {
  //   const editModal:any= document.getElementById('editModal');
  //   const modalBackdrop = document.querySelector('.modal-backdrop');
   
  // this.http.put(  `http://localhost:8080/api/v1/blog/updateprofile/${id} `, data ).subscribe((response:any)=> {
  //   if(response.success == 'true'){
  //    // this.toastService.toasts.push(response.message);
  //    console.log(response);
     
  //    alert(response.message);
  //    editModal.classList.remove('show');
  //      modalBackdrop?.remove();
 
  //    // this.activeModal.close();
  //    // this.router.navigate(['/author']);
  //   }
  //   else{
  //    // this.toastService.toasts.push(response.message);
  //    alert(response.message);
  //    editModal.classList.remove('show');
  //      modalBackdrop?.remove();
    
  //   }
       
  //    });
  //  }
  }
}
  


