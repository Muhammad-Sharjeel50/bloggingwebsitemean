import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from '../_services/toast.service';
// import { Modal } from 'bootstrap/js/dist/modal';
import { BootstrapOptions } from '@angular/core';
@Component({
  selector: 'app-author-crud',
  templateUrl: './author-crud.component.html',
  styleUrls: ['./author-crud.component.css']
})
export class AuthorCRUDComponent {
  userList :any;
  editList : any = [];
  title:any;
  description:any;
  image:any;
   user :any;
 
  // id:any = "64003b2d775065fc26cd9932";
  dataId:any = localStorage.getItem('token');
  id:any ;
  imageSrc: any;
  constructor (private httpClient : HttpClient,public toastService: ToastService,public router  :Router,){
   this.userList = [];
  //  this.editList = [];
   
  }
  ngOnInit(){
    
    
   this.getuserList();
   console.log("dataId",this.userList);
   
   
   
  
  }
  getuserList():any{
const token = localStorage.getItem('token');
const headers = new HttpHeaders().set('Authorization', `${token}`);
console.log(headers);
   this.httpClient.get( `http://localhost:8080/api/v1/blog/getauthorblog`,{headers}).subscribe((response:any)=>{
    console.log(response);
    
   return this.userList = response.data;
   
  })
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
  deleteForm(id:any):any{
    const token = localStorage.getItem('token');
    console.log(token);
    const deleteModal:any= document.getElementById('deleteModal');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    
const headers = new HttpHeaders().set('Authorization', `${token}`);
    // id = this.dataId.id;
    this.httpClient.delete( `http://localhost:8080/api/v1/blog/deleteblog/${id}`,{headers}).subscribe((response:any)=>{
      console.log(response);
   if( response.success == true ){
    alert(response.message);
    this.ngOnInit();
    // modalBackdrop.remove();
    // deleteModal?.classList.remove('show');
    modalBackdrop.remove();
    deleteModal?.classList.remove('show');
    window.scrollTo(0,0);
    
    }
   
    else{
      // alert(response.message);
      
      modalBackdrop.remove();
      deleteModal?.classList.remove('show');
      //     deleteModal?.setAttribute('aria-hidden', 'true');
      //     modalBackdrop?.parentNode?.removeChild(modalBackdrop);
      // this.ngOnInit();
      
      const postElement:any = document.getElementById(`post-${id}`);
   
if (postElement && postElement.parentNode) {
  postElement.parentNode.removeChild(postElement);
}
    }
   })
   }

   onSubmit(id:any,data:any):any {
   const editModal:any= document.getElementById('editModal');
   const modalBackdrop = document.querySelector('.modal-backdrop');
    const token = localStorage.getItem('token');
const headers = new HttpHeaders().set('Authorization', `${token}`);
 this.httpClient.put(  `http://localhost:8080/api/v1/blog/updateblog/${id} `, data ,{headers}).subscribe((response:any)=> {
   if(response.success == 'true'){
    // this.toastService.toasts.push(response.message);
    console.log(response);
    
    alert(response.message);
    editModal.classList.remove('show');
      modalBackdrop?.remove();
   }
   else{
    // this.toastService.toasts.push(response.message);
    alert(response.message);
    editModal.classList.remove('show');
      modalBackdrop?.remove();
   
   }
      
    });
  }
  editblog(data:any):any {
    console.log(data);
    this.editList = data
  }
  showStandard() {
    this.toastService.show('I am a standard toast', {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  showError() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-danger text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl:any) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
  showProfile(){
 
  } 
}
