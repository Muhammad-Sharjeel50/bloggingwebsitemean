import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminPannelService {

  constructor(private http : HttpClient) { }

  // adminApproval(){
  //   // //();
  //   return this.http.get(  'http://localhost:8080/api/v1/admin/getpendingblog' ).subscribe((response:any)=>{
  //     //(response.data);
  //     response.success ==true ? this.toastr.success(response.message) :  this.toastr.success(response.message);  
  //  })
  //  }; 
}
