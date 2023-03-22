import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
   token:any = localStorage.getItem('token');
  
 constructor(private http : HttpClient,public toastr: ToastrService) { }
  adminApprovalForAuthor(request:any){
  
    const token = localStorage.getItem('token');
    //(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
//(headers);

   
    this.http.put('http://localhost:8080/api/v1/admin/approverequesteduser',{token,request},).subscribe((response:any)=> {
      //(response)
    return  response.success == true ? this.toastr.success(response.message) :  this.toastr.error(response.message);
      
    });
  }
  
}
