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
   //("dataId",this.userList);
   const token = localStorage.getItem('token');
   //(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
//(headers);
let data  = this.http.get('http://localhost:8080/api/v1/user/getuser',{headers}).subscribe((response:any)=> {
     
// this.toastService.toasts.push(response.message);
//(response);
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
    localStorage.removeItem('role');
    // this.ngOnInit();
    return this.router.navigate(['/']);
    
  }
  checkUser():any{
    const role = localStorage.getItem('role');
    if(role !==null){
     return this.router.navigate(['/updateuser']);
    }
    else{
      return alert('You need to login to update');
    }
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
  

  onSubmit(id:any,data:any):any {
  
  }
}
  


