import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = 'http://localhost:8080/api/v1/login/setlogin'
  constructor(private http : HttpClient) { }
  user(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url,data)
  }
}
