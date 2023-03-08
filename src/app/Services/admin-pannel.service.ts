import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminPannelService {

  constructor(private http : HttpClient) { }

  // adminApproval(){
  //   // console.log();
  //   return this.http.get(  'http://localhost:8080/api/v1/admin/getpendingblog' ).subscribe((response:any)=>{
  //     console.log(response.data);
  //     response.success ==true ? alert(response.message) :  alert(response.message);  
  //  })
  //  }; 
}
