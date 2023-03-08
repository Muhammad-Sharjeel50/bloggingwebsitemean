import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
  
  constructor(private http: HttpClient,public router : Router) {}

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
      alert('Please select an image');
    }
    else{
    const token = localStorage.getItem('token');
    console.log(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
console.log(headers);

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('image', this.image);
    
    this.http.post('http://localhost:8080/api/v1/blog/postblog', formData ,{headers}).subscribe((response:any)=> {
      console.log(response);
      this.title = '';
    this.description = '';
    this.image = '';
     if(response.success == true) {
    
      alert(response.message)
      this.router.navigate(['/author']);
     }  
     else {
      alert(response.message)
     }
     
      
    });
  }
  }
  
  validateDescription() {
    let wordCount = this.description.split(/<.*?>/).join('').split(/\s+/).length;
    console.log(wordCount);
    
    return wordCount > 10;
  }
  remainingWords() {
    let wordCount = this.description.trim().replace(/<[^>]*>/g, '').split(/\s+/).length;
    let remainingWords = 10 - wordCount;
    return Math.max(remainingWords, 0);
  }
  onSubmission(){
    console.log('Submission')
  }
}