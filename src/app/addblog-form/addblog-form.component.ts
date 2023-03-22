import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addblog-form',
  templateUrl: './addblog-form.component.html',
  styleUrls: ['./addblog-form.component.css']
})

export class AddblogFormComponent {
  title: any;
  image: any;
  imageSrc: any;
  description: any;
  
  constructor(private http: HttpClient,public router : Router,private toastr : ToastrService ) {}

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
  onSubmit():any {
    if(!this.image ){
      this.toastr.warning('Please select an image');
    }
    else{
    const token = localStorage.getItem('token');
    //(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
//(headers);

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('image', this.image);
    
    this.http.post('http://localhost:8080/api/v1/blog/postblog', formData ,{headers}).subscribe((response:any)=> {
      //(response);
      this.title = '';
    this.description = '';
    this.image = '';
     if(response.success == true) {
    
     this.toastr.success(response.message)
      this.router.navigate(['/author']);
     }  
     else {
     this.toastr.error(response.message)
     }  
    }); } } 
  validateDescription() {
    let wordCount = this.description.split(/<.*?>/).join('').split(/\s+/).length;
    //(wordCount);
    return wordCount > 10;
  }
  remainingWords() {
    let wordCount = this.description.trim().replace(/<[^>]*>/g, '').split(/\s+/).length;
    let remainingWords = 10 - wordCount;
    return Math.max(remainingWords, 0);
  }
  onSubmission(){
    //('Submission')
  }
}