import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
   token:any = localStorage.getItem('token');
  
 constructor(private http : HttpClient) { }
  adminApprovalForAuthor(request:any){
  
    const token = localStorage.getItem('token');
    console.log(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
console.log(headers);

   
    this.http.put('http://localhost:8080/api/v1/admin/approverequesteduser',{token,request},).subscribe((response:any)=> {
      console.log(response)
    return  response.success == true ? alert(response.message) :  alert(response.message);
      
    });
  }
  
}
