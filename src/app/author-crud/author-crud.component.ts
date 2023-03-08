import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
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
  // id:any = "64003b2d775065fc26cd9932";
  dataId:any = localStorage.getItem('token');
  id:any = this.dataId.id;
  imageSrc: any;
  constructor (private httpClient : HttpClient){
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
const headers = new HttpHeaders().set('Authorization', `${token}`);
    
    this.httpClient.delete( `http://localhost:8080/api/v1/blog/deleteblog/${id}`,{headers}).subscribe((response:any)=>{
      console.log(response);
    response.success == 'true' ? alert(response.message) : alert(response.message);
    
   })
   }

   onSubmit(id:any,data:any):any {
    const token = localStorage.getItem('token');
const headers = new HttpHeaders().set('Authorization', `${token}`);
 this.httpClient.put(  `http://localhost:8080/api/v1/blog/updateblog/${id} `, data ,{headers}).subscribe((response:any)=> {
    return  response.success == true ?  alert(response.message)  :  alert(response.message);
      
    });
  }
  
  editblog(data:any):any {
    console.log(data);
    this.editList = data
  }
}
